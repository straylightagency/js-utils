/**
 * Replace a value from the given array by another one using a callback to find the index
 *
 * @param {Array} array
 * @param {any} callbackFn
 * @param {any} value
 * @returns {Array}
 */
export default function replace(array, callbackFn, value) {
    const index = array.findIndex( callbackFn );

    if ( index !== -1 ) {
        array[ index ] = value;
    }

    return array;
}