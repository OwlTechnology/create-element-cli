#! /usr/bin/env node
const template = require('./helpers/buildTemplate.js');
const arguments = require('./helpers/arguments.js');

// Check against the arguments and run the correct action
arguments.CheckArgumentFormat();  

switch(process.argv[2].toLowerCase()) {
    case arguments.MODULE:
        // Code that is ran if a use passes the --module flag
        let elementName = process.argv[3];
        template.CreateElementTemplate(elementName);
        template.CreateFileTemplate(elementName, "readme.md");
        template.CreateFileTemplate(elementName, "demo.html");
        template.CopyFile('.gitignore');
        console.log(`${elementName} module was successfully created!`);
        break
    default:
        // Code that is ran if no argument profile is matched
        template.CreateElementTemplate(process.argv[2]);
        console.log(`${process.argv[2]} was successfully created!`);
        
}

// and we're done
process.exit(0);
