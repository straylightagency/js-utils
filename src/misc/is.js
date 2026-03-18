const toString = Object.prototype.toString;

/**
 * Check if parameter is an object.
 *
 * @param {*} object
 * @returns {boolean}
 */
export function isObject(object) {
    return object !== null && typeof object === 'object'
}

/**
 * Check if parameter is the given className.
 *
 * @param {*} object
 * @param {string} className
 * @returns {boolean}
 */
export function isClass(object, className) {
    return isObject( object ) && toString.call( object ) === '[object ' + className + ']';
}

/**
 * Check if parameter is a plain object.
 *
 * @param {*} object
 * @returns {boolean}
 */
export function isPlainObject(object) {
    return isClass( object, 'Object' );
}