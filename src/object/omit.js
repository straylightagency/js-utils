/**
 * Returns a shallow copy excluding the provided own enumerable keys.
 * `keys` may be an array or a list of key arguments.
 *
 * @param {Object} object
 * @param {Array} keys
 * @returns {Object}
 */
export default function omit(object, ...keys) {
    const excluded = new Set(keys.flat());
    return Object.fromEntries(
        Object.entries(object).filter(([key]) => !excluded.has(key))
    );
}
