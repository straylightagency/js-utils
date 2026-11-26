/**
 * Return the array without the last element.
 *
 * @param {Array} array
 * @returns {Array}
 */
export default function initial(array) {
    const length = array == null ? 0 : array.length;
    return length ? array.slice( 0, -1 ) : [];
}
