/**
 * Function that can be used with JSON.stringify to replace {function} into string equivalent.
 *
 * @deprecated
 * @param {String} key
 * @param {any} value
 * @returns {*|undefined}
 */
export default function replacer(key, value) {
    return typeof value === 'function' ? value.toString : value;
}