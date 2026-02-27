/**
 * @param callbackFn {Function}
 * @returns void
 */
export default function whenReady(callbackFn) {
    document.readyState === "loading" ? document.addEventListener( "DOMContentLoaded", callbackFn ) : callbackFn();
}
