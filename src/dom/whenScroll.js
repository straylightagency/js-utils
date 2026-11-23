/**
 * Listen when the window document is scrolled. Return a callback to cancel the event listener.
 *
 * @param {Function} callbackFn
 * @param {boolean} immediately
 * @param {Document|HTMLElement} container
 * @returns {function(): void}
 */
export default function whenScroll(callbackFn, immediately = true, container = undefined) {
    let x, y;

    if ( ! container ) {
        container = document;
    }

    const wrappedFn = e => {
        x = window.scrollX;
        y = window.scrollY;

        callbackFn( { x, y }, e );
    };

    container.addEventListener( 'scroll', wrappedFn );

    if ( immediately ) {
        wrappedFn();
    }

    return () => container.removeEventListener( 'scroll', wrappedFn );
}