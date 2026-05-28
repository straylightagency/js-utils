/**
 * Listen when the window is resized. Returned an array with two methods:
 * - init() : callback is called immediately with width and height values
 * - cancel() : cancel the event listener
 *
 * @param {Function} callbackFn
 * @returns {[]}
 */
export default function whenResize(callbackFn) {
    let ww, wh;

    const wrappedFn = e => {
        ww = window.innerWidth;
        wh = window.innerHeight;

        callbackFn( { ww, wh }, e );
    };

    window.addEventListener( 'resize', wrappedFn );

    const init = () => wrappedFn();
    const cancel = () => window.removeEventListener( 'resize', wrappedFn );

    return [
        init, cancel
    ];
}