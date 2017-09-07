
module.exports.MODULE = 'module';
module.exports.BUILD = 'build';

/**
 * Check to make sure we have an element name
 */
module.exports.argumentsHaveElementName = (args) => {

    // Check if element name exists
    if(args[2] === undefined) {
        return false;
    }

    // Check if element name exists when using a flag
    if(args[2] !== undefined &&
         args[2][1] === '-' &&
          args[3] === undefined) {
            return false;
    }

    // We gucci
    return true;
}
