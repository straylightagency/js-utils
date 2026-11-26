import newIsObject from "../object/isObject.js";
import newIsPlainObject from "../object/isPlainObject.js";
import isType from "../object/isType.js";

/**
 * Check if parameter is the given className.
 *
 * @deprecated use isType() instead.
 * @param {any} object
 * @param {String} className
 * @returns {Boolean}
 */
export function isClass(object, className) {
    return isType( object, className );
}

/**
 * Check if parameter is an object.
 *
 * @deprecated use isObject() from separated file instead.
 * @param {any} object
 * @returns {Boolean}
 */
export function isObject(object) {
    return newIsObject(object);
}

/**
 * Check if parameter is a plain object.
 *
 * @deprecated use isPlainObject() from separated file instead.
 * @param {any} object
 * @returns {Boolean}
 */
export function isPlainObject(object) {
    return newIsPlainObject(object);
}