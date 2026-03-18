/**
 * Return the last element of an array.
 *
 * @param {[]} array
 * @returns {*|undefined}
 */
export default function last(array) {
    const length = array == null ? 0 : array.length

    return length ? array[ length - 1 ] : undefined
}
