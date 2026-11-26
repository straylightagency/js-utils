/**
 * Remove a value from the given array, returning a copy.
 *
 * @param {Array} array
 * @param {any} value
 * @returns {Array}
 */
export default function remove(array, value) {
    const index = array.indexOf(value);

    if (index === -1) {
        return [...array];
    }

    return [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ];
}