/**
 * Decode a base64 value.
 *
 * @deprecated
 * @param {any} value
 * @returns {string|null}
 */
export function decodeBase64(value) {
    try {
        value = atob( value );

        if ( typeof value === 'string' ) {
            value = JSON.parse( value );
        }

        return value;
    } catch ( e ) { /* shhhhhh... */ }

    return null;
}

/**
 * Encode a value to base64.
 *
 * @deprecated
 * @param value
 * @returns {string|null}
 */
export function encodeBase64(value) {
    try {
        return btoa( JSON.stringify( value ) );
    } catch (e) { /* shhhhhh... */ }

    return null;
}

/**
 * Return true if given value is a base64.
 *
 * @deprecated
 * @param {any} value
 * @returns {Boolean}
 */
export function isBase64(value) {
    try {
        atob( value );
        return true;
    } catch ( e ) { /* shhhhhh... */ }

    return false;
}