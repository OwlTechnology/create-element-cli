const fs = require('fs');
const stampTemplate = require('./stampTemplate.js');
const convertTagNameToClassName = require("./convertTagNameToClassName.js");

/**
 * Create the template custom element file
 */
module.exports.CreateElementTemplate = (elementName) => {
    const rawTemplate = fs
    .readFileSync(require.resolve("./../templates/singleElement.js"))
    .toString();

    const stamp = stampTemplate(rawTemplate, {
        className: convertTagNameToClassName(elementName),
        tagName: elementName
    });

    // Now write to file
    const path = process.cwd() + "/" + elementName + ".js";

    fs.writeFileSync(path, stamp);
}

/**
 * Copy and template a given file with the custom element information
 */
module.exports.CreateFileTemplate = (elementName, fileName) => {
    const rawTemplate = fs
    .readFileSync(require.resolve(`./../templates/${fileName}`))
    .toString();

    const stamp = stampTemplate(rawTemplate, {
        className: convertTagNameToClassName(elementName),
        tagName: elementName
    });

    // Now write to file
    const path = process.cwd() + "/" + fileName;

    fs.writeFileSync(path, stamp);
}

/**
 * Copy a file form teh template folder to the new directory
 */
module.exports.CopyFile = (fileName) => {
    let content = fs.readFileSync(`./../templates/${fileName}`, "utf-8");
    fs.writeFileSync(`${process.cwd()}/${fileName}`, content, "utf-8");
}