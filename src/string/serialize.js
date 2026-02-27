/**
 * @param object {{}}
 * @returns {String}
 */
export default function serialize(object) {
    return Object.entries( object ).map( ( [ key, value ] ) => encodeURIComponent( key ) + '=' + encodeURIComponent( value ) ).join('&');
}