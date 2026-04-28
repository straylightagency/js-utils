/**
 * Change a boolean value then restore that value after a timeout on miliseconds.
 *
 * Works fine with VueJS and signal based frameworks :
 * restoreBooleanAfter( bool => messageSent.value = bool, true, 15_000 );
 *
 * messageSent will be set to "true" than restored to "false" after 15 sec.
 *
 * @param {Function} callbackFn
 * @param {boolean} boolean
 * @param {number} timeoutMs
 */
export default function restoreBooleanAfter(callbackFn, boolean, timeoutMs) {
    const value = callbackFn( boolean );

    setTimeout( () => callbackFn( ! value ), timeoutMs );
}