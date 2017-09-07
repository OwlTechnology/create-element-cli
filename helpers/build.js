const uglify = require('uglify-es');
const fs = require('fs');

const scopeStart = '(function(){';
const scopeEnd = `})();`;

module.exports.buildFile = (fileName) => {

    let codeString = fs.readFileSync(`./${fileName}.js`, 'utf-8');
    codeString = `${scopeStart} ${codeString} ${scopeEnd}`;

    const result = uglify.minify(codeString);

    fs.writeFileSync(`./${fileName}.min.js`, result.code);

};

