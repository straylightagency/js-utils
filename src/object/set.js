/**
 * Set a value using a dot-notated key string.
 *
 * @example set({foo: {bar: {doe: "Bob"}}}, "foo.bar.smith", "John");
 * => {foo: {bar: {doe: "Bob", {smith: "John"}}}}
 *
 * @param {Object} object
 * @param {String} keys
 * @param {any} value
 * @returns {any}
 */
export default function (object, keys, value) {
    const arrKeys = keys.split('.');
    let source = object;

    arrKeys.map( ( key, i ) => {
        if ( i === arrKeys.length - 1 ) {
            source[ key ] = value;
        }

        if ( source[ key ] === undefined ) {
            source[ key ] = {};
        }

        source = source[ key ];
    } );

    return object;
}
