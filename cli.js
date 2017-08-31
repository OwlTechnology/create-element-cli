#! /usr/bin/env node

const fs = require('fs');
const stampTemplate = require('./helpers/stampTemplate.js');
const convertTagNameToClassName = require("./helpers/convertTagNameToClassName.js");
const arguments = require('./helpers/arguments.js');

arguments.ChooseAction();

/*
// Get the element name from the args
const elementName = process.argv[2];

if(!elementName) {
    console.warn("No element name specified!");

    process.exit(1);
}

// if we have an element name, we're good, let's make the template
const rawTemplate = fs
    .readFileSync(require.resolve("./templates/singleElement.js"))
    .toString();

const stamp = stampTemplate(rawTemplate, {
    className: convertTagNameToClassName(elementName),
    tagName: elementName
});

// Now write to file
const path = process.cwd() + "/" + elementName + ".js";

fs.writeFileSync(path, stamp);

// and we're done
process.exit(0);
*/
