/**
 * Check if the given value is defined as a Plain Object
 *
 * @param {any} value
 * @return {Boolean}
 */
export default function isPlainObject(value) {
    return value !== null && typeof value === 'object' && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
}