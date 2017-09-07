#! /usr/bin/env node
const template = require('./helpers/buildTemplate.js');
const arguments = require('./helpers/arguments.js');
const ArgsManager = require("./helpers/ArgsManager");
const build = require('./helpers/build');

const args = new ArgsManager();

// Check the formatting of our arguments
if(args.getAmountOfArguments() < 1) {
    console.log("No element name specified.");

    process.exit(1);
}

// Check against the arguments and run the correct action
const elementName = args.getArgumentByIndex(0);

if(args.hasFlag(arguments.MODULE)) {
    template.createElementTemplate(elementName);
    template.createFileTemplates(elementName, ["readme.md", "demo.html"]);
    template.copyFileTo('gitignore', '.gitignore');

    console.log(`${elementName} module was successfully created!`);
} else if(args.hasFlag(arguments.BUILD)){
    build.buildFile(elementName);
    console.log(`${elementName} has been built.`);
} else {
    template.createElementTemplate(elementName);
    console.log(`${elementName} was successfully created!`);
}

// and we're done
process.exit(0);
