/**
 * Returns a shallow object containing only the provided own enumerable keys.
 * `keys` may be an array or a list of key arguments.
 *
 * @param {Object} object
 * @param {Array} keys
 * @returns {Object}
 */
export default function pick(object, ...keys) {
    const selected = new Set(keys.flat());
    return Object.fromEntries(
        Object.entries(object).filter(([key]) => selected.has(key))
    );
}
