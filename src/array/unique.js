/**
 * Returns a duplicate-free copy, preserving first occurrence order.
 * Uses Set's SameValueZero equality.
 *
 * @param {Array} array
 * @returns {Array}
 */
export default function unique(array) {
    return [...new Set(array)];
}
