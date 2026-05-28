/**
 * Function that can be used with JSON.parse to revive functions.
 *
 * @param {*} value
 * @returns {*|undefined}
 */
export default function reviver(value) {
    if ( typeof value === 'string' && value.indexOf('function ') === 0 ) {
        return new Function(`return ${value}`)();
    }

    return value;
}