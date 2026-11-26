/**
 * Listen when the window is resized. Return a callback to cancel the event listener.
 *
 * @param {Function} callbackFn
 * @param {Boolean} immediately
 * @param {EventTarget} container
 * @returns {function(): void}
 */
export default function whenResize(callbackFn, immediately = true, container = window) {
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

    container.addEventListener( 'resize', wrappedFn );

    if ( immediately ) {
        wrappedFn();
    }

    return () => container.removeEventListener( 'resize', wrappedFn );
}