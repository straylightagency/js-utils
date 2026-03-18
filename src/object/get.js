/**
 * Get a value using a dot-notated key string.
 *
 * @example get({foo: {bar: {doe: "Bob"}}}, "foo.bar.doe")
 * => "Bob"
 *
 * @param {{}} object
 * @param {string} keys
 * @returns {*}
 */
export default function (object, keys) {
    return keys.split('.').reduce( ( acc, prop ) => acc[ prop ], object );
}
