const fs = require('fs');
const stampTemplate = require('./stampTemplate.js');
const convertTagNameToClassName = require("./convertTagNameToClassName.js");

module.exports = (elementName) => {
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