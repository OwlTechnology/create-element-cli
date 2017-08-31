
module.exports.MODULE = '--module';

/**
 * Check to make sure we have an element name
 */
module.exports.ArgumentsHaveElementName = () => {

    // Check if element name exists
    if(process.argv[2] === undefined) {
        return false;
    }

    // Check if element name exists when using a flag
    if(process.argv[2] !== undefined &&
         process.argv[2][1] === '-' &&
          process.argv[3] === undefined) {
            return false;
    }

    // We gucci
    return true;
}
