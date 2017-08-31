const template = require('./buildTemplate.js');

const MODULE = '--module';

/**
 * Check to make sure we have an element name
 */
const CheckArgumentFormat = () => {
    if(process.argv[2] === undefined ||
        (process.argv[2][1] === '-' && process.argv[3] == undefined)) {
        console.log("No element name specified");
        process.exit(1);
    }
}

/**
 * Look at the arguments and based on the input choose the
 * correct action to take
 */
const ChooseAction = () => {

    CheckArgumentFormat()    

    switch(process.argv[2].toLowerCase()) {
        case MODULE:
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
}

module.exports = {
    ChooseAction
}