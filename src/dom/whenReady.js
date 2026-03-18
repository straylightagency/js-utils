/**
 * Execute the given callback when the DOM is ready.
 *
 * @param {Function} callbackFn
 * @returns void
 */
export default function whenReady(callbackFn) {
    document.readyState === "loading" ? document.addEventListener( "DOMContentLoaded", callbackFn ) : callbackFn();
}
