/**
 * Returns values from `array` that are not present in `other`.
 * Uses SameValueZero equality and preserves the order and duplicates
 * from the first array.
 *
 * @param {Array} arrau
 * @param {Array} other
 * @returns {Array}
 */
export default function difference(array, other) {
    const excluded = new Set(other);
    return array.filter(value => !excluded.has(value));
}
