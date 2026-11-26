/**
 * Apply a map callback function over an object.
 *
 * @param {Object} object
 * @param {Function} callbackFn
 * @returns {Object}
 */
export default function map(object, callbackFn) {
    return Object.keys( object ).reduce( ( result, key ) => {
        result[ key ] = callbackFn( object [ key ], key );
        return result;
    }, {});
}