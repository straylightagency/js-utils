/**
 * Serialize an object into a string, transforms functions into string.
 *
 * @example serialize({foo: {bar: {doe: "Bob", {smith: "John"}}}})
 * => {"foo":{"bar":{"doe":"Bob","smith":"John"}}}
 *
 * @param {Object} object
 * @returns {String}
 */
export default function serialize(object) {
    return JSON.stringify( object, replacer );
}

/**
 * Function that can be used with JSON.stringify to replace {function} into string equivalent.
 *
 * @param {String} key
 * @param {any} value
 * @returns {*|undefined}
 */
function replacer(key, value) {
    return typeof value === 'function' ? value.toString : value;
}