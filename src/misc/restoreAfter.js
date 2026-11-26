/**
 * Change a value then restore that value after a timeout on milliseconds.
 *
 * Works fine with Vue.js and signal based frameworks :
 * restoreAfter( bool => messageSent.value = bool, true, false, 15_000 );
 *
 * messageSent will be set to "true" than restored to "false" after 15 sec.
 *
 * @param {Function} callbackFn
 * @param {any} from
 * @param {any} to
 * @param {Number} timeoutMs
 * @returns {{cancel: function(): void, flush: function(): void}}
 */
export default function restoreAfter(callbackFn, from, to, timeoutMs) {
    callbackFn( from );

    const flush = () => {
        callbackFn(to);
    };

    const timer = setTimeout( flush, timeoutMs );

    return {
        cancel: () => clearTimeout( timer ),
        flush
    };
}