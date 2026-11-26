/**
 * Serialize an object into a string, handling functions and Date objects.
 *
 * @example serialize("{"foo":{"bar":{"doe":"Bob","smith":"John"}}}")
 * => {"foo":{"bar":{"doe":"Bob","smith":"John"}}}
 *
 * @param {String} object
 * @returns {Object}
 */
export default function unserialize(object) {
    return JSON.parse( object, (key, value) => {
        const revivers = [
            dateReviver,
            functionReviver
        ];

        let revivedValue = undefined;

        for ( const reviver of revivers ) {
            if ( ( revivedValue = reviver( value ) ) !== undefined ) {
                return revivedValue;
            }
        }

        return value;
    } );
}

/**
 * Function that can be used with JSON.parse to revive Date objects.
 *
 * @param {any} value
 * @returns {Date|*}
 */
function dateReviver(value) {
    if ( typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test( value ) ) {
        return new Date( value );
    }

    return value;
}

/**
 * Function that can be used with JSON.parse to revive functions.
 *
 * @param {any} value
 * @returns {any}
 */
function functionReviver(value) {
    if ( typeof value === 'string' && value.indexOf('function ') === 0 ) {
        return new Function(`return ${value}`)();
    }

    return value;
}