/**
 * Return an object with specified keys.
 *
 * @param {Object} object
 * @param {Array} keys
 * @returns {Object}
 */
export default function only(object, keys) {
    return Object.entries( object ).reduce( (acc, [key, value]) => {
        if ( keys.indexOf( key ) !== -1 ) {
            acc[ key ] = value;
        }

        return acc;
    }, {} );
}
