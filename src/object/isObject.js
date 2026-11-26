/**
 * Check if the given value is defined as an Object
 *
 * @param {any} value
 * @return {Boolean}
 */
export default function isObject(value) {
    return value !== null && typeof value === 'object'
}