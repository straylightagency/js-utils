/**
 * Listen when the window document is scrolled. Returned an array with two methods:
 * - init() : callback is called immediately
 * - cancel() : cancel the event listener
 *
 * @param {Function} callbackFn
 * @param {boolean} immediately
 * @returns {[]}
 */
export default function whenScroll(callbackFn, immediately = true) {
    let x, y;

    const wrappedFn = e => {
        x = window.scrollX;
        y = window.scrollY;

        callbackFn( { x, y }, e );
    };

    document.addEventListener( 'scroll', wrappedFn );

    const init = () => wrappedFn();
    const cancel = () => document.removeEventListener( 'scroll', wrappedFn );

    if ( immediately ) {
        init();
    }

    return [
        init, cancel
    ];
}