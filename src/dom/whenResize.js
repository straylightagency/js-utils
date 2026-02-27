/**
 * @param callbackFn {Function}
 * @param init
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
