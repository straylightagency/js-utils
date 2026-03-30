import replacer from "../misc/replacer.js";

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
    return JSON.stringify( object, replacer );
}