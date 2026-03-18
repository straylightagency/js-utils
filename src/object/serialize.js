/**
 * Serialize an object into a string, transforms functions into string.
 *
 * @example serialize({foo: {bar: {doe: "Bob", {smith: "John"}}}})
 * => {"foo":{"bar":{"doe":"Bob","smith":"John"}}}
 *
 * @param {{}} object
 * @returns {String}
 */
export default function serialize(object) {
    return JSON.stringify( object, (key, value) => typeof value === 'function' ? value.toString : value );
}