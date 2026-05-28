/**
 * Function that can be used with JSON.parse to revive Date objects.
 *
 * @param {*} value
 * @returns {Date|undefined}
 */
export default function reviver(value) {
    if ( typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test( value ) ) {
        return new Function(`return ${value}`)();
    }

    return value;
}