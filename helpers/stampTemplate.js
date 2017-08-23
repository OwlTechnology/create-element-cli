const TEMPLATE_STRING_REGEX = /\/\*[ ]?{(?:[a-z]|[A-Z])*}[ ]?\*\//g;

function fillValue(str, config) {
    const valueName = str.replace(/([}]?[ ]?[\/|\*][\/|\*][ ]?[{]?)/g, "");

    if(typeof config[valueName] !== 'undefined') {
        return config[valueName].toString();
    } else {
        return "";
    }
}

module.exports = function(str, replaceConfig = {}) {
    const splitTemplate = str.split(TEMPLATE_STRING_REGEX);

    let output = splitTemplate[0];
    let splitTemplateIndex = 1;

    while(match = TEMPLATE_STRING_REGEX.exec(str)) {
        const result = fillValue(match[0], replaceConfig);

        output += result;
        output += splitTemplate[splitTemplateIndex];
        ++ splitTemplateIndex;
    }

    return output;
};