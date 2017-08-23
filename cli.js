#! /usr/bin/env node

const fs = require('fs');

const TEMPLATE_STRING_REGEX = /\/\*[ ]?{(?:[a-z]|[A-Z])*}[ ]?\*\//g;

const elementName = process.argv[2];

if(!elementName) {
    console.warn("No element name specified!");

    process.exit(1);
}

function fillValue(str, config) {
    const valueName = str.replace(/([}]?[ ]?[\/|\*][\/|\*][ ]?[{]?)/g, "");

    if(typeof config[valueName] !== 'undefined') {
        return config[valueName].toString();
    } else {
        return "";
    }
}

function convertTagNameToClassName(tagName) {
    const split = tagName.split("-");
    let output = "";

    for(let x = 0; x < split.length; x++) {
        const word = split[x];

        output += capitalizeFirstLetter(word);
    }

    return output;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// if we have an element name, we're good, let's make the template
const rawTemplate = fs.readFileSync("./templates/singleElement.js").toString();
const splitTemplate = rawTemplate.split(TEMPLATE_STRING_REGEX);

let replaceConfig = {
    className: convertTagNameToClassName(elementName),
    tagName: elementName
};

let output = splitTemplate[0];
let splitTemplateIndex = 1;

while(match = TEMPLATE_STRING_REGEX.exec(rawTemplate)) {
    const result = fillValue(match[0], replaceConfig);

    output += result;
    output += splitTemplate[splitTemplateIndex];
    ++ splitTemplateIndex;
}

console.log(output);
