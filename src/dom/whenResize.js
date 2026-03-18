/**
 * Execute the given callback when the window is resized. Second parameter allows to run the callback immediately.
 *
 * @param {Function} callbackFn
 * @param {boolean} init
 */
export default function whenResize(callbackFn, init = true) {
    let ww = window.innerWidth, wh = window.innerHeight;

    window.addEventListener( 'resize', () => {
        ww = window.innerWidth;
        wh = window.innerHeight;

        callbackFn( { ww, wh } );
    } );

    init ? callbackFn( { ww, wh } ) : null;
}
