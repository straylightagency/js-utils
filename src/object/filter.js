/**
 * Filter attributes of an object using a callback function.
 *
 * @param {{}} object
 * @param {Function} callbackFn
 * @returns {{[p: string]: unknown}}
 */
export default function filter(object, callbackFn) {
    return Object.fromEntries( Object.entries( object ).
            filter( ( [ key, value ] ) => callbackFn( value, key ) ) );
}