import dateReviver from '../date/reviver.js'
import functionReviver from '../misc/reviver.js'

/**
 * Serialize an object into a string, handling functions and Date objects.
 *
 * @example serialize("{"foo":{"bar":{"doe":"Bob","smith":"John"}}}")
 * => {"foo":{"bar":{"doe":"Bob","smith":"John"}}}
 *
 * @param {string} object
 * @returns {{}}
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