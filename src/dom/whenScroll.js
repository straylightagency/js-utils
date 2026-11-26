/**
 * Listen when the window document is scrolled. Return a callback to cancel the event listener.
 *
 * @param {Function} callbackFn
 * @param {Boolean} immediately
 * @param {EventTarget} container
 * @returns {function(): void}
 */
export default function whenScroll(callbackFn, immediately = true, container = document) {
    const wrappedFn = event => {
        const dimensions = container === window
            ? {
                width: window.innerWidth,
                height: window.innerHeight
            }
            : {
                width: container.clientWidth,
                height: container.clientHeight
            };

        callbackFn(dimensions, event);
    };

    container.addEventListener( 'scroll', wrappedFn );

    if ( immediately ) {
        wrappedFn();
    }

    return () => container.removeEventListener( 'scroll', wrappedFn );
}