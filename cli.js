#! /usr/bin/env node
const template = require('./helpers/buildTemplate.js');
const arguments = require('./helpers/arguments.js');

const args = process.argv;

// Check the formatting of our arguments
if(!arguments.argumentsHaveElementName(args)) {
    console.log("No element name specified");
    process.exit(1);
}

// Check against the arguments and run the correct action
switch(args[2].toLowerCase()) {
    case arguments.MODULE:
        // Code that is ran if a use passes the --module flag
        const elementName = args[3];
        template.createElementTemplate(elementName);
        template.createFileTemplates(elementName, ["readme.md", "demo.html"]);
        template.copyFile('.gitignore');
        console.log(`${elementName} module was successfully created!`);
        break
    default:
        // Code that is ran if no argument profile is matched
        template.createElementTemplate(args[2]);
        console.log(`${args[2]} was successfully created!`);
        
}

// and we're done
process.exit(0);
