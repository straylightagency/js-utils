const toString = Object.prototype.toString;

/**
 * @param obj
 * @returns {boolean}
 */
export function isObject(obj) {
    return obj !== null && typeof obj === 'object'
}

/**
 * @param obj
 * @param className
 * @returns {boolean}
 */
export function isClass(obj, className) {
    return isObject( obj ) && toString.call( obj ) === '[object ' + className + ']';
}

/**
 * @param obj
 * @returns {boolean}
 */
export function isPlainObject(obj) {
    return isClass( obj, 'Object' );
}