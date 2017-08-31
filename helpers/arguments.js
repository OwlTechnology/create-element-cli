
module.exports.MODULE = '--module';

/**
 * Check to make sure we have an element name
 */
module.exports.CheckArgumentFormat = () => {
    if(process.argv[2] === undefined ||
        (process.argv[2][1] === '-' && process.argv[3] == undefined)) {
        console.log("No element name specified");
        process.exit(1);
    }
}
