/**
 * Returns unique values present in both arrays.
 * Preserves the order of the first array; uses SameValueZero equality.
 *
 * @param {Array} array
 * @param {Array} other
 * @returns {Array}
 */
export default function intersection(array, other) {
    const candidates = new Set(other);
    const included = new Set();

    return array.filter(value => {
        if (!candidates.has(value) || included.has(value)) return false;
        included.add(value);
        return true;
    });
}
