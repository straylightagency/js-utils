/**
 * Listen when the window is resized. Return a callback to cancel the event listener.
 *
 * @param {Function} callbackFn
 * @param {boolean} immediately
 * @param {Document|HTMLElement} container
 * @returns {function(): void}
 */
export default function whenResize(callbackFn, immediately = true, container = undefined) {
    let ww, wh;

    if ( ! container ) {
        container = document;
    }

    const wrappedFn = e => {
        ww = window.innerWidth;
        wh = window.innerHeight;

        callbackFn( { ww, wh }, e );
    };

    container.addEventListener( 'resize', wrappedFn );

    if ( immediately ) {
        wrappedFn();
    }

    return () => container.removeEventListener( 'resize', wrappedFn );
}