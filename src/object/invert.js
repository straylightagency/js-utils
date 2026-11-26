/**
 * Reverses an object's enumerable own string-keyed entries.
 * Values become property keys (therefore are string-coerced).
 * Duplicate values: the last key wins.
 *
 * @param {Object} object
 * @returns {Object}
 */
export default function invert(object) {
    const result = {};

    for (const [key, value] of Object.entries(object)) {
        Object.defineProperty(result, String(value), {
            value: key,
            enumerable: true,
            configurable: true,
            writable: true
        });
    }

    return result;
}
