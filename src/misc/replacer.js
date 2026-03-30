/**
 Function that can be used with JSON.stringify to replace {function} into string equivalent.
 *
 * @param {string} key
 * @param {*} value
 * @returns {*|undefined}
 */
export default function replacer(key, value) {
    return typeof value === 'function' ? value.toString : value;
}