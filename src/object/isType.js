import isObject from "./isObject.js";

const toString = Object.prototype.toString;

/**
 * Check if the given value is defined as an Object with given 'className'.
 *
 * @param {any} value
 * @param {String} className
 * @return {Boolean}
 */
export default function isType(value, className) {
    return isObject( value ) && toString.call( value ) === '[object ' + className + ']';
}