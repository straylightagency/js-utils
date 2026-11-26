/**
 * Creates a function that invokes `callback` at most once.
 * The first return value (including a Promise) is cached.
 *
 * @param {Function} callbackFn
 * @returns {Function}
 */
export default function once(callbackFn) {
    if ( typeof callbackFn !== 'function' ) {
        throw new TypeError('once() expects a function');
    }

    let called = false;
    let result;

    return function (...args) {
        if ( ! called ) {
            called = true;
            result = callbackFn.apply( this, args );
        }

        return result;
    };
}
