//begin autogenerated index
            var pageIndex = {"/about-semver":{"id":"/about-semver","title":"About Semver","text":"# Semantic Versioning\n\n## What is it?\n\nSemantic versions, or \"semver\", is a way of formatting version numbers. A bunch of things use it-- \"Minecraft 1.15.2\" is an example; the first number (1) is the \"major version\", the second number (15) is the minor version, and the third number (2) is the patch version. More information can be found [here](https://semver.org/).\n\n## How does this project use it?\n\nWhen making an edit, you should increase the *major* version if:\n\n* There is a major edit; a complete change of format\n\nWhen making an edit, you should increase the *minor* version if:\n\n* There is a smaller edit, like a rule addition or removal, that nevertheless changes the meaning of the document\n\nWhen making an edit, you should increase the *patch* version if:\n\n* You're only changing or clarifying something (e.g. a grammar fix)\n\nWhenever you increase a number, you should reset all less-signifigant numbers to 0 (so a major increase will set both the minor and patch to 0).\n\nOnly major versions get preserved forever publically on this website, but *all* changes (including changes to files that don't belong to a version, such as this one) are accessible through GitHub in markdown format.\n\n## What can I change? Are older versions unchangable?\n\nYeah, kind of. You can change the format (for example, they were transfered from HTML to Markdown in v4.0.0), but their content is unchangable.\n\n"},"/about-site":{"id":"/about-site","title":"About Site","text":"# About the Site\n\n## Why?\n\nPutting things in Discord gives no control over interface, only very basic control over organization, and limited features (images, links, etc). A custom-made markdown-based website (this one!) gives us a relatively low entry barrier to contributing, while greatly expanding the possibilities over a Discord channel.\n\n## How do I contribute? Who can contribute?\n\nAnybody, at any time! If you want to publish something that you think is useful, feel free to make a pull request on [GitHub](https://github.com/coleh2/discord-doc-site); it has a web-based editor, so there's no need to download the project to your computer.\n\nIf you want to add a custom feature (such as a new type of diagram for people to use, a change to the script that builds the site, etc), that's also definitely allowed-- same procedure, except if you're adding something that others will use, please do some testing-- try to document any tests you've done in your pull request.\n\nIf your addition isn't immediately added, don't worry! Chances are, I just haven't seen it yet. Every request should at least get a comment in response. \n\n### Can I become an admin and help that way?\n\nI'd be glad to accept help! You don't really need technical experience, but a basic understanding of how Git works is good, as well as knowledge of web development if you want.\n\n## Is this affiliated with {person or group}?\n\nThis is made & maintained by @coleh. That's it :) \n\n## This page looks bad\n\nIf it's an actual bug, please take a screenshot and post it to the [issue tracker](https://github.com/coleh2/discord-doc-site/issues) on GitHub. If you don't like the design, then still feel free to make an issue-- if you have a pet peeve to fix, a request to make the site better, or any other feedback, I'd love to hear it!\n\n## How is this site hosted? How do we know you're not changing the rules?\n\nThis site is hosted on Netlify, a static site hosting service. Whenever a new version of the site is put up on the [\"master\" Git branch](https://github.com/coleh2/discord-doc-site/tree/master/), GitHub compiles that into a web-viewable version, and then puts that version onto the  [\"publish\" Git branch](https://github.com/coleh2/discord-doc-site/tree/publish/). Netlify sees this and deploys it to their servers. You can be sure I'm not changing the rules behind anyone's back because Git doesn't allow that-- every change submitted is cryptographically linked to those made before; it's extremely difficult if not impossible to falsely edit the pages on this site.\n\n## Is there any way I can contact you that isn't GitHub?\n\nYeah! I'm @coleh on Discord, and coleh@coleh.net for email."},"/versions/1-1-0":{"id":"/versions/1-1-0","title":"1 1 0","text":"# v1.1.0\n\n* Table of Contents\n{:toc}\n\nNote: I tried to make these as comprehensive as possible (as in, a warthog could be a moderator if they follow the rules), but if you think something can be changed, DM me @coleh.\n\n## Section 1: Basic Rules\n\n1.  Names should be phonetically pronounceable, in general. There are exceptions to this rule, which are detailed in Part 3.\n2.  Spam is not allowed. This includes basic spam, misplaced NSFW images, and/or _excessive_ cussing.\n3.  Impersonation, whether of someone we know IRL or on the internet, is prohibited without the explicit permission of the person in question.\n4.  At least half of someone's messages should be helpful and collaborative.\n5.  Hate speech is not tolerated.\n\n## Section 2: Technical Definitions\n\nCommon Sense\n: Something agreed on by the majority of society\n\nPhonetically Pronounceable\n: Able to be spoken, in 1 minute or less, by a native speaker of the language spoken by the majority of the server.\n\nSpam\n: Any message sent within 0.1 seconds of another by the same person.\n: Two messages by the same person within 4 hours of one another that both include @everyone.\n: More than one message including a link posted by the same person within 1 second.\n: Any NSFW image posted in a non-NSFW chat.\n\nImpersonation\n: Purposefully pretending to be someone who you are not.\n\nHate Speech\n: Messages that personally attack another user based on their identity\n\nBot\n: Any Discord account which is a bot account and has the @Bot role\n\nWe\n: The majority of the community.\n\n## Section 3: Exceptions\n\nYour name is not required to be phonetically pronounceable if:\n\n*   It is more than 20% similar to your IRL name (first or last)\n*   It is a common word in the language spoken by the majority of the server.\n*   It is two syllables or less.\n\nSpam is allowed if:\n\n*   The person in question is a bot.\n*   The person in question is in #bot-poking\n\n## Section 4: Consequences\n\nViolations of _any_ rules will probably result in a warning about the consequences of more rule-breaking.\n\nViolations of Rule 1 can result in:\n\n*   Requests to change your nickname.\n*   Manual nickname changes.\n\nViolations of Rule 2 can result in:\n\n*   Deletion of messages.\n    *   This will be used for the first through fifth offenses.\n*   Removal of chatting abilities, except in the #time-out chat.\n    *   For the sixth offense, this will last 10 minutes.\n    *   For the seventh offense, this will last 15 minutes.\n    *   For the eighth offense, this will last 25 minutes.\n    *   For the ninth offense, this will last 30 minutes.\n    *   For the tenth offense, this will last 1 hour.\n    *   For the eleventh offense, this will last 1.5 hours.\n    *   For the twelfth offense, this will last 2 hours.\n    *   For the thirteenth offense, this will last 3 hours.\n    *   For the fourteenth offense, this will last 5 hours.\n*   Being kicked/banned from the server.\n\nViolations of Rule 3 will result in:\n\n*   Being kicked/banned from the server.\n*   This can be chosen by the person who was impersonated, if applicable. If not, you will be kicked.\n*   The person you tried to impersonate may be notified (if applicable).Violations of Rule 4 will result in:\n*   Removal of chatting abilities\n    *   First offense: 5 minutes.\n    *   Second offense: 15 minutes.\n    *   Third offense: 30 minutes.\n    *   Fourth offense: 1 hour.\n*   Being kicked/banned from the server."},"/versions/1-2-0":{"id":"/versions/1-2-0","title":"1 2 0","text":"# v1.2.0\n\n* Table of Contents\n{:toc}\n\nNote: I tried to make these as comprehensive as possible (as in, a warthog could be a moderator if they follow the rules), but if you think something can be changed, DM me @coleh.\n\n## Section 1: Basic Rules\n    \n1.  Have fun!\n2.  Hate speech is not tolerated.\n3.  Spam is not allowed. This includes basic spam, misplaced NSFW images, and/or excessive cursing.\n4.  Impersonation, whether of someone we know IRL or on the internet, is prohibited without the explicit permission of the person in question.\n5.  Names should be phonetically pronounceable and not be offensive.\n\n## Section 2: Technical Definitions\n    \nSpam\n: Two messages by the same person within 1 day that both say @everyone\n: No images in #general\n: Any NSFW image posted in a non-NSFW chat\n\nImpersonation\n: Purposefully pretending to be someone who you are not.\n\nExcessive\n: More than 60%; can be chosen otherwise by a moderator\n\nHate Speech\n: Messages that personally attack another user based on their identity\n\nBot\n: Any Discord account which is a bot account and has the @Bot role. \n\nWe\n: The majority of the community.\n    \n## Section 3: Exceptions\n    \nYour name is not required to be phonetically pronounceable if:\n\n*   It is more than 60% similar to your IRL name (first or last)\n*   It is a common word in the language spoken by the majority of the server.\n*   It is two syllables or less.\n\nSpam is allowed if:\n\n*   The person in question (the spammer) is a bot.\n\n## Section 4: Consequences\n    \nViolations of any rules will probably result in a warning about the consequences of more rule-breaking.\n\nViolations of Rule 1 will result in stern looks from the higher-ups.\n\nViolations of Rule 2 will result in:\n\n*   Removal of chatting abilities and deletion of offending message(s).\n    *   First offense: 1 hour.\n*   Being kicked/banned from the server.\n\nViolations of Rule 3 can result in:\n\n*   Deletion of messages.\n    *   This will be used for the first through third offenses.\n*   Removal of chatting abilities, except in the #time-out chat.\n    *   For the fourth offense, this will last 15 minutes.\n    *   For the fifth offense, this will last 30 minutes.\n    *   For the sixth offense, this will last 2 hours.\n    *   For the seventh offense, this will last 6 hours.\n    *   For the eighth offense, this will last 1 day.\n    *   For the ninth offense, this will last 3 days.\n    *   For the tenth offense, this will last 1 week.\n    *   For the eleventh offense, this will last 2 weeks.\n    *   For the twelfth offense, this will last 1 month.\n*   Being kicked/banned from the server.\n\nViolations of Rule 4 will result in:\n\n*   Being kicked/banned from the server.\n*   This can be chosen by the person who was impersonated, if applicable. If not, you will be kicked.\n*   The person you tried to impersonate may be notified (if applicable).\n\nViolations of Rule 5 can result in:\n\n*   Requests to change your nickname.\n*   Manual nickname changes."},"/versions/2-1-0":{"id":"/versions/2-1-0","title":"2 1 0","text":"# v2.1.0\n\n1.  Elections for roles will be held on the first of January and July every year.\n2.  The people must vote for a new King every six months. A King cannot run for a second term. While it is recommended that people come up with a campaign if they are planning to run for King, write-in candidates are allowed. If someone is elected the King, they may decline. In this scenario the runner-up will become King. A former Hand of the King may run for King. A former Warden may run for King. AWD\n3.  The people must vote for a new Hand of the King every six months. A former King may not become Hand of the King.\n4.  The people must vote to keep Wardens every six months. However, unlike the higher ranks, only people who have supreme knowledge of the content become warden if they have high knowledge of the content. Generally, Wardens are only replaced if they don’t do their jobs or are surpassed in knowledge of content. A Warden may serve multiple terms. A former King may run for a Warden role. A former Hand of the King may run for a Warden role.\n5.  A new Warden role may be added by majority vote of the server at any time, a person may be immediately elected by majority vote but will have to run once more at the six month elections. An old Warden may be eliminated by a majority vote of the server at any time.\n6.  No spamming. While spamming is somewhat up to interpretation, the action of spamming a word or phrase multiple times in a row (especially something like @everyone or @here) can result in a strike.\n7.  Three strikes will result in a person being stripped of all power and made a felon."},"/versions/2-1-1":{"id":"/versions/2-1-1","title":"2 1 1","text":"# v2.1.1\n\nNo rules."},"/versions/2-1-2":{"id":"/versions/2-1-2","title":"2 1 2","text":"# v2.1.2\n\nYeat"},"/versions/3-1-0":{"id":"/versions/3-1-0","title":"3 1 0","text":"# v3.1.0 \n\nA few things to note about rules:\n\n1.  Admins are permitted to \"ignore\" the rules if they have a reason to. The only current reason that this includes is warning someone else.\n2.  Everyone must follow the rules regularly.\n3.  The rules may change according to votes. Official votes allow Admins to make new rules.\n\n1.  Play CS:GO today or you will be banned\n2.  refrain from speaking in any chat at all if someone mentions an uncrustable. This is to worship their holy unbeing of being an uncrustable.\n3.  If Black Jesus says something and you don't do it you don't get the n word pass\n4.  Listen to Admins because they're better than you irl totally 100% they're admins because they're better i can assure you that is the reason\n5.  If someone sends a meme and you say \"ive seen it\" or something along those lines, we have the right to sell your property to a private corperation.\n6.  If you get exactly a 78.3% on a math test, you get admin\n7.  If you have airpods you aren't allowed to wear them in case you can't hear us when we're telling you to play Pit\n8.  If you know of someone named Freddy Horginson, please contact Eli for no reason and tell him hi freddy\n9.  Do not verbally abuse any of the bots in their DMs. Bots have feelings too. (except you @Oink\\_Bot (Mark's Bot) no one loves you \\\\d\\\\)moron)\n10.  hEvA uFn!\n11.  Nutting in November also gives the same punishment as rule #5.\n12.  Every time John, Paul, or Adam say they don't want to start a debate, it is your duty to make sure that you start a debate and make sure they are well aware they started the debate. Failure to do so will result in the loss of 3-5 kidneys, depending on how many stomachs you have.\n13.  If any minecraft server suddenly goes down or crashes, it's Coleman's fault for going negative speed."},"/versions/3-2-0":{"id":"/versions/3-2-0","title":"3 2 0","text":"# v3.2.0\n\n1.  Game hate is no longer punishable\n2.  Admins are not above the law and we shall follow all of the rules\n3.  Obvious spam is punishable\n4.  Server drama is not punishable though I think some people may look down on it\n5.  I am assuming elections will be like Nick said, \"we formalize elections to take place during the weeks leading up to the summer and winter solstices? Basically, a new King would take power on June 21st and December 21st every year. Also, our server anniversary is December 20th, so the 21st would be the first day of the 'New Year'. One King would serve till June 21st, and another would finish out the year. Terms are six months. I think formalizing these dates adds more authenticity to the elections, and our server structure as a whole. Note: John would serve until December 21st, 2019 if we implemented this, since Charlie left his position early.\""},"/versions/4/changelog":{"id":"/versions/4/changelog","title":"Changelog","text":"# Version 4.0.0 Changes\n\n## Multi-File\n\nThis version added support for multi-file major versions.\n\n## Auto-Build\n\nThis version added support for markdown files, which are automatically compiled into HTML. All previous versions were transpiled from HTML into markdown for a lower entry barrier to contributing.\n\n## Backreferences!\n\nv4.0.0 added the backreference specification, a formalization of the notation used to reference other messages\n\n## Docs, not rules\n\nThis site is now a documentation site, not solely a rule site. This opens up for more applications\n\n## Design changes!\n\nRedesigned color palatte! Better font! More accessibility! Yay!\n\n"},"/versions/4":{"id":"/versions/4","title":"Index","text":"# Index of v4\n\n* Index\n{:index}\n\n"},"/versions/4/message-backreference-specification":{"id":"/versions/4/message-backreference-specification","title":"Message Backreference Specification","text":"# Message Backreference Specification\n\n* Table of Contents\n{:toc}\n\n{::options toc_levels=\"1..3\" /}\n\n## Purpose\n\nIn the interest of clear communication and conversation, it is beneficial to have a unified syntax for referring to previously sent messages. Currently, there is an unspecified syntax that serves this purpose, but it has several unclear parts, such as: \n\n* Scope (when quoting should be used instead)\n* Subtypes and their intended usages (e.g. `^^^` vs `^3`)\n* Extensions to the current unspoken standard (e.g.` ^name`)\n* Meaning (agreement vs. simple reference)\n\nDespite these, this specification will attempt to be backwards-compatible with the majority of current usage. This document should be by no means considered to be a new, mandatory specification to follow, but rather a clarifying document for confusion and an formal explaination for the current syntax. \"Incorrect\" usage should not be construed as an offensive or negative action.\n\nAs such, this specification is established as a clear way to unambiguously reference a previous message on instant messaging platforms, whether for agreement, additional\ndiscussion, indication as context, or for other purposes.\n\n## Required Technical Knowledge\n\nThis document has been written to require little to no additional knowledge in order to understand properly. The diagrams that describe the syntax are [railroad diagrams](https://en.wikipedia.org/wiki/Syntax_diagram), a visual representation of syntax intended to be easy to understand. Each diagram defines a part of the syntax, and then may be referred to by other railroad diagrams. If you don't understand any part, feel free to ask; any questions are very helpful to improve the document.\n\n## Definitions\n\nbackreference\n: A string of text that indicates a previous message\n\ncurrent message\n: The message that has the backreference in it.\n\nyoungest message\n: most recently sent, not counting the current message\n\noldest message\n: least recently sent, not counting the current message\n\n## General Backreference Specification\n\n### Backreference Usage\n\nAll backreferences must start with a caret character (`^`). All backreferences should be formatted as a seperate word to avoid ambiguity with other uses of the caret character, such as exponents. A message solely consisting of a backreference should be seen as a general agreement with the message it refers to. However, if there is any other text in the message, its meaning takes precedence over the implicit agreement. \n\n---\n\n### Syntax\n\n~~~\nbackreference = (singular backreference | plural backreference | filtered backreference);\n~~~\n{: .language-ebnf .railroad-diagram}\n\nYou can test out backreferences and see how they work in this interactive Syntax Explorer, which is pre-loaded with some messages to search.\n\n<div class=\"syntax-checker-widget\">\n</div>\n---\n\n### I'm a Computer; How Do I Read These?\n\nYou can get an [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) syntax for backreferences here:\n\n~~~\ndigit = \"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\";\nnumber = { digit };\nletter = \"A\" | \"B\" | \"C\" | \"D\" | \"E\" | \"F\" | \"G\" | \"H\" | \"I\" | \"J\" | \"K\" | \"L\" | \"M\" | \"N\" | \"O\" | \"P\" | \"Q\" | \"R\" | \"S\" | \"T\" | \"U\" | \"V\" | \"W\" | \"X\" | \"Y\" | \"Z\" | \"a\" | \"b\" | \"c\" | \"d\" | \"e\" | \"f\" | \"g\" | \"h\" | \"i\" | \"j\" | \"k\" | \"l\" | \"m\" | \"n\" | \"o\" | \"p\" | \"q\" | \"r\" | \"s\" | \"t\" | \"u\" | \"v\" | \"w\" | \"x\" | \"y\" | \"z\" ;\nsymbol = \"[\" | \"]\" | \"{\" | \"}\" | \"(\" | \")\" | \"<\" | \">\" | \"'\" | '\"' | \"=\" | \"|\" | \".\" | \",\" | \";\";\ncharacter = symbol | digit | letter;\nword = { letter };\nphrase = { word | \" \" | symbol };\nname = word;\nsubject = word;\nmessage text = phrase;\n\nsingular backreference = caret count backreference | caret quantity backreference | quote;\ncaret count backreference = { \"^\" } ;\ncaret quantity backreference = \"^\", number ;\nquote = \"^\" , \"\\\"\" , message text , \"\\\"\";\nplural backreference = backreference range | backreference sequence;\nbackreference range = singular backreference , \"-\" , singular backreference\nbackreference sequence = backreference , { \",\" , backreference }\nfiltered backreference = { backreference filter } , (* treat as ^ *) | singular backreference | plural backreference;\nbackreference filter = author backreference filter | message subject filter;\nauthor backreference filter = \"^\" , [ \"@\" ], name;\n~~~\n{: .language-ebnf .railroad-diagram-source-collection .download-file-instead-of-display data-filename=\"backreference.ebnf\"}\n\n---\n\n### Future Backreference Usage\n\nThe caret character is part of Markdown, the formatting language that Discord uses; it is used to convey superscript. Currently, superscript is disabled, but should Discord activate this functionality, an escape character (specifically the backslash, `\\`) may be used in front of carets to continue using backreferences normally. If that is considered too annoying for a day-to-day basis at the time, a revision of the syntax will be made.\n\n\n## Singular Backreferences\n\nSingular backreferences are the building blocks that serve as a base to construct other backrefernces. Each one references only one single message. Backreferences are specified here in terms of relativity, with relative backreferences at the start and absolute backreferences at the end.\n\n~~~\nsingular backreference = caret count backreference | caret quantity backreference | quote;\n~~~\n{: .language-ebnf .railroad-diagram}\n\n### Caret Count Backreference\n\nCaret count backreferences reference a message relative to the message that they are sent in. A single caret references the message directly before the current one, a double caret references the message two messages previous, etc. \n\n#### Syntax\n\n~~~\ncaret count backreference = { \"^\" } ;\n~~~\n{: .language-ebnf .railroad-diagram}\n\n#### Examples: \n\n~~~\n^\n~~~\n{: .language-backreference}\n\nThis backreference refers to the youngest message.\n\n~~~\n^^\n~~~\n{: .language-backreference}\n\nThis backreference refers to the second youngest message.\n\n#### Inconsistencies to Note\n\nIn some internet dialects, carets are used to reference in agreement the directly previous message, with more carets representing a stronger agreement. This is not the syntax used here, but it may be carried over when images are posted. The default number of carets in such usages is 3.\n\n#### Scope\n\nCaret count backreferences should not be used when the message referenced is over five messages ago. If an older reference is to be referenced, [caret quantities](#caret-quantity-backreference) should be used. However, any number of carets is technically valid.\n\n---\n\n### Caret Quantity Backreference\n\nCaret quantities reference a message relative to the message that they are sent in. They are different from caret count backreferences in that they use a single caret, followed by a number; this allows them to reference older messages without causing annoyance by the necessity of counting the carets. In order to be distinct from exponents in mathematical equations, they must be in their own word.\n\n#### Syntax\n\n~~~\ncaret quantity backreference = \"^\", number ;\n~~~\n{: .language-ebnf .railroad-diagram}\n\n#### Examples\n\n~~~\n^2\n~~~\n{: .language-backreference}\n\nThis backreference refers to the second-youngest message.\n\n~~~\n^7\n~~~\n{: .language-backreference}\n\nThis backreference refers to the seventh-youngest message.\n\n#### Scope\n\nCaret quantities may be used for reference to messages as recent as the second-youngest (i.e. `^2`). For brevity, referring to the youngest message (with `^1`) is discouraged, as this may be accomplished easier with a single [caret count](#caret-count-backreference) backreference. Caret quantities should not be used to reference messages older than the 12th-youngest (e.g. `^12`)-- if an older message should be referenced, an [author backreference](#author-backreference-filter) or a [quote](#quote) should be used. However, any number is technically valid.\n\n---\n\n### Quote Backreference\n\nQuotes unambiguously refer to a message by its content. Quotes may be done in a Discord-sanctioned format by right-clicking a message and hitting the \"Quote\" option. As such, there is no defined syntax for this backreference method when it is used alone. However, for combining with other backreferences, there is a [seperate syntax](#quote-backreference-filter).\n\n#### Scope\n\nQuotes may be used to refer to any message, but in order to prevent the clogging of chat, if any relative backreference method ([caret count](#caret-count-backreference) or  [caret quantity](#caret-quantity-backreference)) is recommended for the message, that should be used instead.\n\n## Plural Backreferences\n\nAll backreference types above this entry are singular; they reference only one message. In some cases, a user may wish to indicate more than one message at once. To do this, plural backreferences can be used, which combine multiple singular singular backreferences in order to reference more than one.\n\n\n~~~\nplural backreference = backreference range | backreference sequence;\n~~~\n{: .language-ebnf .railroad-diagram}\n\n### Backreference Ranges\n\nRanges can be used to indicate more than one message at once. To make a range, join two backreferences with a hyphen. The first backreference indicates the first message that is referenced, and the second indicates the last message. Ranges may be defined chronologically (oldest-youngest) or anti-chronologically (youngest-oldest); they are the same. Any singular backreferences may be used.\n\n#### Syntax\n\n~~~\nbackreference range = singular backreference , \"-\" , singular backreference\n~~~\n{: .language-ebnf .railroad-diagram}\n\n#### Examples\n\n~~~\n^3-^5\n~~~\n{: .language-backreference}\n\nThis range refers to the all messages from the third-youngest to fifth-youngest messages.\n\n~~~\n^@sam-^@nick^4\n~~~\n{: .language-backreference}\n\nThis backreference refers to all messages from the youngest message by Sam through the fourth-youngest message by Nick.\n\n#### Scope\n\nAs a combination of other backreferences, ranges have no defined scope of their own, but the recommendations of each endpoint should be satisfied.\n\n### Backreference Sequences\n\nBackreference sequences are an alternate method of indicating multiple messages. It allows more fine-grained control than ranges, but is longer. To make a sequence, join backreferences to each referenced message with a comma. *Any* backreference may be used in a sequence, including ranges and sequences themselves.\n\n#### Syntax \n\n~~~\nbackreference sequence = backreference , { \",\" , backreference }\n~~~\n{: .language-ebnf .railroad-diagram}\n\n#### Examples\n\n~~~\n^^,^^^^\n~~~\n{: .language-backreference}\n\nThis range refers to the second-youngest and fourth-youngest messages.\n\n~~~\n^,^^^,^5-^7\n~~~\n{: .language-backreference}\n\nThis backreference refers to the youngest message, the fourth-youngest message, and the fifth-youngest through seventh-youngest messages.\n\n#### Scope\n\nAs a combination of other backreferences, sequences have no defined scope of their own, but the recommendations of each endpoint should be satisfied.\n\n## Backreference Filters\n\nBackreference filters may be used on their own, or put in front of a [singular backreference](#singular-backreference); this is called a \"filtered backreference\". Multiple backreference filters can be stacked on a single base backreference, but there can only be one base. Any Filter used on its own should be treated as filtering on `^` (youngest message). When counting the messages for a filtered backreference, messages that do not match (e.g. messages by other authors) should not be counted.\n\n~~~\nfiltered backreference = { backreference filter } , (* treat as ^ *) | singular backreference;\nbackreference filter = author backreference filter | message quote filter;\n~~~\n{: .language-ebnf .railroad-diagram}\n\n### Author Backreference Filter\n\nAuthor backreferences reference a message by its author. The syntax of an author backreference is a caret, followed by the name of the author (either as a ping, or with a dot after the \"@\" symbol). An author filter matches on messages that are sent by the specified author.\n\n#### Syntax\n\n~~~\nauthor backreference filter = \"^\" , \"@\" , [ \".\" ], name;\n~~~\n{: .language-ebnf .railroad-diagram}\n\n#### Examples \n\n~~~\n^@nick\n~~~\n{: .language-backreference}\n\nThis backreference refers to the youngest message by Nick.\n\n~~~\n^@.sam^3\n~~~\n{: .language-backreference}\n\nThis backreference refers to the third-youngest message by Sam, while not pinging.\n\n#### Scope\n\nAuthor backreferences should not be used for messages that are over 75 messages (total) old, or 15 messages (of the author) old. Author backreferences should also not be used to reference messages that are younger than 5 messages old, but this may be disregarded in fast-moving chats.\n\n---\n\n### Quote Backreference Filter\n\nQuote filters refer to a message by its content. Quotes may be done in a [Discord-sanctioned format](#quote-backreference) for usage alone, but this syntax is included for combination or for inline usage. This filter matches on messages that contain the string specified by `message text` below.\n\n#### Syntax\n\n~~~\nquote = \"^\" , \"\\\"\" , message text , \"\\\"\";\n~~~\n{: .language-ebnf .railroad-diagram}\n\n#### Scope\n\nQuotes may be used to refer to any message, but in order to prevent the clogging of chat, if any relative backreference method ([caret count](#caret-count-backreference) or  [caret quantity](#caret-quantity-backreference)) is recommended for the message, that should be used instead.\n"},"/versions":{"id":"/versions","title":"Index","text":"# Versions\n\n* Index\n{:index}\n\n"}};
            //end autogenerated index
            
            (function() {
    if(!window.pageIndex) return;

    var params = new URLSearchParams(window.location.search);

    if(!params.has("q")) return;

    var searchIndex = lunr(function() {
        let index = this;

        index.ref("id");
        index.field("title", { boost: 10 });
        index.field("text");

        let keys = Object.keys(pageIndex);
        for (var i = 0; i < keys.length; i++) {
            let indexItem = pageIndex[keys[i]];
            index.add({
                "id": indexItem.id,
                "title": indexItem.title,
                "text": indexItem.text
            });
        }
    });

    var results = searchIndex.search(params.get("q"));

    console.log(results);

    let serpList = document.getElementById("serp-list");
    let serpQuery = document.getElementById("serp-query");

    serpQuery.textContent = `${results.length} results for "${params.get("q")}"`

    for(var i = 0; i < results.length; i++) {
        serpList.appendChild(buildResult(pageIndex[results[i].ref],results[i].matchData));
    }


    function buildResult(resultDocObject,matchData) {
        let li = document.createElement("li");
        let resultId = results[i].ref;

        let resultObject = pageIndex[resultId];

        let resultHeading = document.createElement("h3");

        let resultLink = document.createElement("a");
        resultLink.href = resultDocObject.id;
        resultLink.textContent = resultDocObject.title;

        resultHeading.appendChild(resultLink);

        let resultSubheading = document.createElement("div");
        resultSubheading.textContent = resultDocObject.id;

        let resultSnippet = buildSnippet(resultDocObject.text, matchData);

        li.appendChild(resultHeading);
        li.appendChild(resultSubheading);
        li.appendChild(resultSnippet);

        return li;
    }

    function buildSnippet(text, matchData) {
        let snippet = document.createElement("p");
        let matchTerm = Object.keys(matchData.metadata)[0];

        let matchIndex = text.indexOf(matchTerm);
        let snippetText = text.substring(matchIndex-100,matchIndex+100);

        snippet.innerHTML = `&hellip;${boldifySubstring(snippetText, matchTerm)}&hellip;`;

        return snippet;
    }

    function boldifySubstring(text, substr) {
        let subIndex = text.indexOf(substr);

        let before = text.substring(0,subIndex);
        let after = text.substring(subIndex + substr.length);

        return `${before}<strong>${substr}</strong>${after}`
    }
})();