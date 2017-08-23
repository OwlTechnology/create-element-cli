const capitalizeFirstLetter = require("./capitalizeFirstLetter.js");

module.exports = function(tagName) {
    const split = tagName.split("-");
    let output = "";

    for(let x = 0; x < split.length; x++) {
        const word = split[x];

        output += capitalizeFirstLetter(word);
    }

    return output;
}