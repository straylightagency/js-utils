/**
 * Get a value using a dot-notated key string.
 *
 * @example get({foo: {bar: {doe: "Bob"}}}, "foo.bar.doe")
 * => "Bob"
 *
 * @param {Object} object
 * @param {String} path
 * @returns {any}
 */
export default function get(object, path) {
    return path.split('.').reduce(
        (acc, key) => acc?.[key],
        object
    );
}