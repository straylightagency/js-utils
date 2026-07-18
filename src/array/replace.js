/**
 * Replace a value from the given array by another one using a callback to find the index
 *
 * @param {[]} array
 * @param {*} callback
 * @param {*} value
 * @returns {[]}
 */
export default function replace(array, callback, value) {
    const index = array.findIndex( callback );

    if ( index !== -1 ) {
        array[ index ] = value;
    }

    return array;
}