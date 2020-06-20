let markedIt = require("marked-it-core");

var fs = require("fs");
var path = require("path");

let parseRailroad = require(path.resolve(__dirname, "parse-railroad-diagram.js"));
let parseExpression = require(path.resolve(__dirname, "parse-js-expression.js"));
let Highcharts = require(path.resolve(__dirname, "highcharts-server-version.js"))();

//initialize additional charts
let additionalChartDir = path.resolve(__dirname, "highcharts-more-chart-types");
let additionalCharts = fs.readdirSync(additionalChartDir);

for(let i = 0; i < additionalCharts.length; i++) {
    let chartModule = require(path.resolve(additionalChartDir, additionalCharts[i]));

    chartModule(Highcharts);
}


const debugLevel = 3;

let erbParser = require("erb");

let projectFolder = process.env.NHS_RULES_DIR || path.resolve(__dirname,"..");

let mdSourceFolder = path.resolve(projectFolder, "source");
let mdBuildFolder = path.resolve(projectFolder, "build");

let mdFiles = loadMarkdownFilesFromFolder(mdSourceFolder);

for(var i = 0; i < mdFiles.length; i++) {
    if(debugLevel >=2) console.log(`Parsing ${mdFiles[i]}`);

    let source = fs.readFileSync(mdFiles[i], {encoding: "utf-8"})

    compileMarkdown(source, mdFiles[i], function(html,builtFileName) {
        //only write if a custom-made version doesn't exist
        if(!fs.existsSync(builtFileName)) fs.writeFileSync(builtFileName,html);
    });
    
}

//remove all markdown files from build, where they may've been copied by the build process
cleanMarkdownFilesFromFolder(mdBuildFolder);

function compileMarkdown(mdSource, sourceFileName, cb) {    
    let compiledHtml = markedIt.generate(mdSource, {
        extensions: {
            html: {
                onCode: parseDiagrams,
                onList: function(html, data) {
                    if(html.startsWith("<ul toc>")) return "<ul toc></ul>";
                    else if(html.startsWith("<ul index>")) return "<ul index></ul>";
                }
            }
        }
    });

    compiledHtml.html.text = replaceToc(compiledHtml);

    let builtFileName = sourceFileName.replace(mdSourceFolder,mdBuildFolder).replace(/\.md$/,".html");

    //don't override the file if it's already custom-made from the source directory
    if(fs.existsSync(builtFileName)) return cb(compiledHtml.html.text,builtFileName);

    let sourceFileFolder = sourceFileName.replace(path.basename(sourceFileName),"");

    //add index list
    compiledHtml.html.text = replaceIndex(compiledHtml, sourceFileFolder, sourceFileName);

    //make folder to place built file in
    let builtFileFolder = builtFileName.replace(path.basename(builtFileName),"");
    fs.mkdirSync(builtFileFolder, { recursive: true });

    let templateFileName = path.resolve(mdSourceFolder,"docpage.html.erb");

    //if there's a template in the folder, load and apply it
    if(fs.existsSync(templateFileName)) {
        if(debugLevel >=2) console.log(`Template file ${templateFileName} found; applying template`);

        let erbTemplate = fs.readFileSync(templateFileName, {encoding: "utf-8"});

        resolveDocpageTemplate(compiledHtml, builtFileName, erbTemplate, function(erbHtml) {
            cb(erbHtml,builtFileName);
        });
    } else {
        if(debugLevel >=2) console.log(`No template file ${templateFileName} found; falling back to bare markdown output`);
        cb(compiledHtml.html.text,builtFileName);
    }
}

function replaceIndex(compiledHtml, folder, indexFilename) {
    let folderContents = fs.readdirSync(folder, {
        withFileTypes: true
    });

    if(compiledHtml.html.text.indexOf("<ul index></ul>") == -1) return compiledHtml.html.text;

    let listElements = [];

    for(var i = 0; i < folderContents.length; i++) {
        if((folderContents[i].name.endsWith(".md") && !indexFilename.endsWith(folderContents[i].name)) || 
           (folderContents[i].isDirectory() && folderContents[i].name != "asset")) {
            let filename = path.basename(folderContents[i].name, ".md")
            listElements.push(`<li><a href="${filename}">${kebabToCapital(filename)}</a></li>`)
        }
    }

    if(listElements.length > 0) return compiledHtml.html.text.replace("<ul index></ul>",`<ul index>${listElements.join("\n")}</ul>`);
    else return compiledHtml.html.text;
}

function replaceToc(compiledHtml) {
    if(compiledHtml.jsonToc.text.length > "{\"toc\":{}}".length) {
        let toc = JSON.parse(compiledHtml.jsonToc.text);
        return compiledHtml.html.text.replace("<ul toc></ul>",`<ul toc>${generateTocList(toc.toc, 3)}`);
    }
}

function generateTocList(toc,maxLevel,parserProblemState,currentLevel) {
    if(!toc.topics) return "";
    if(!parserProblemState) parserProblemState = 0;
    if(!currentLevel) currentLevel = 0;

    if(!toc.label) parserProblemState = 2;

    if(currentLevel >= maxLevel) return "";

    //The parser treats divs as headings, but without labels; to fix this,  this skips them (not making another ul)
    let html = "<ul>"
    if(parserProblemState == 2 || parserProblemState == 3) html = "";

    for(var i = 0; i < toc.topics.length; i++) {
        //communicate current parser-weirdness to the children so they can adapt to it
        let childParserProblem = 0;
        if(toc.topics[i+1] && !toc.topics[i+1].label) childParserProblem = 1;
        
        if(!toc.topics[i].label) html += generateTocList(toc.topics[i], maxLevel, 3,currentLevel+1);
        else html += `<li><a href="#${toc.topics[i].id}">${toc.topics[i].label}</a>${generateTocList(toc.topics[i], maxLevel, childParserProblem,currentLevel+1)}</li>`
    }

    if(parserProblemState != 1 && parserProblemState != 3) html += "</ul>";

    return html;
}

function resolveDocpageTemplate(compiledHtml, fileName, erbTemplate, cb) {
        let title;

        if(compiledHtml.jsonToc.text.length > "{\"toc\":{}}".length) {
            let toc = JSON.parse(compiledHtml.jsonToc.text);
            title = toc.toc.topics[0].label;
        } else {
            title = kebabToCapital(path.basename(fileName,".html"));
        }

        var breadcrumbRelativeAddress = fileName.replace(mdBuildFolder, "");
        var breadcrumbListElems = [];

        //construct breadcrumbs
        for(; breadcrumbRelativeAddress != "" ;) {
            let currentName = path.basename(breadcrumbRelativeAddress);
            let relativeAddressNoEnd = breadcrumbRelativeAddress.replace(/\.html$/,"");

            //don't make entries for indexes
            if(currentName == "index.html") {
                breadcrumbRelativeAddress = breadcrumbRelativeAddress.replace(path.sep + currentName,"");
                continue;
            }

            breadcrumbListElems.push(`<li><a href="${relativeAddressNoEnd.replace(RegExp("\\" + path.sep, "g"), "/")}">
                ${kebabToCapital(currentName.replace(/\.html$/,""))}</a>
            </li>`);

            breadcrumbRelativeAddress = breadcrumbRelativeAddress.replace(path.sep + currentName,"");
        }

        var breadcrumbHtml = "";

        if(breadcrumbListElems.length > 0) {
            breadcrumbHtml = `<ul class="breadcrumb">
            <li><a href="/">Home</a></li>${breadcrumbListElems.reverse().join("")}
            </ul>`
        }

        let version = /(v\d+)/.exec(fileName);
        if(version) version = `<a href="./">This page is part of ${version[1]}</a>`;

        erbParser({
            data: {
                fields: {
                    body: compiledHtml.html.text,
                    title: title,
                    generator: "markedIt",
                    logoImage: "https://cdn.discordapp.com/icons/392830469500043266/3a73e851908ba602319a88f63671a2f5.png",
                    breadcrumbs: breadcrumbHtml,
                    docVersion: version
                }
            },
            template: erbTemplate
        }).then(function(erbHtml) {
            if(debugLevel >=2) console.log(`Template applied successfully`);
            cb(erbHtml);
        }, function(error) {
            console.error("Template parsing error! Using bare parsed HTML. Error below:");
            console.error(error);
            cb(compiledHtml.html.text);
        });
}

function kebabToCapital(str) {
    let words = str.split("-");

    for(var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(" ");
}

function loadMarkdownFilesFromFolder(folder) {
    let results = [];

    let folderContents = fs.readdirSync(folder, {
        withFileTypes: true
    });

    for(var i = 0; i < folderContents.length; i++) {
        let subfile = folderContents[i];

        if(subfile.isDirectory()) {
            results = results.concat(loadMarkdownFilesFromFolder(path.resolve(folder, subfile.name)));
        } else if(subfile.isFile() && subfile.name.endsWith(".md")) {
            results.push(path.resolve(folder, subfile.name));
        }
    }

    return results;
}

function cleanMarkdownFilesFromFolder(folder) {

    let folderContents = fs.readdirSync(folder, {
        withFileTypes: true
    });

    for(var i = 0; i < folderContents.length; i++) {
        let subfile = folderContents[i];

        if(subfile.isDirectory()) {
            cleanMarkdownFilesFromFolder(path.resolve(folder, subfile.name))
        } else if(subfile.isFile() && subfile.name.endsWith(".md")) {
            fs.unlinkSync(path.resolve(folder, subfile.name));
        }
    }
}

function parseDiagrams(html, data) {
    let dom = data.htmlToDom(html)[0];
    
    //if it has a foo-diagram class, it's a diagram
    if(dom.attribs.class && /( |^)\w+-diagram( |$)/.test(dom.attribs.class)) {
        let diagramType = /( |^)(\w+)-diagram( |$)/.exec(dom.attribs.class)[2];

        let innerText = data.domUtils.getText(dom),
            parsableText = parseCharacterEntities(innerText);
        switch(diagramType) {
            case "railroad":
                return parseRailroad(parsableText);
            break;
            case "highchart":
                let chartParams = parseExpression(parsableText);

                //fill in properties that are required for the server-side variety
                if(!chartParams.chart) chartParams.chart = {};
                if(!chartParams.chart.width || !chartParams.chart.height) {
                    chartParams.chart.height = 600;
                    chartParams.chart.width = 800;
                }

                //default to no-credits
                if(!chartParams.credits) chartParams.credits = {};
                if(!chartParams.credits.enabled) chartParams.credits.enabled = false;

                let chart = Highcharts.chart(chartParams);

                return `<figure>${chart.container.__buildInnerHTML(false)}</figure>`;
            break;
        }
    }
}

function parseCharacterEntities(str) {
    return str.replace(/&amp;/g,"&")
              .replace(/&quot;/g,"\"")
              .replace(/&apos;/g,"'")
              .replace(/&lt;/g,"<")
              .replace(/&gt;/g,">")
              .replace(/&#39;/g,"'");
}