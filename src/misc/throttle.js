/**
 * Limit the number of times a callback gets called in a certain time period. Returned function by the throttler allows to cancel the internal timer.
 *
 * @param {Function} callbackFn
 * @param {Number} delay
 * @returns {(function(): void)|*}
 */
export default function throttle(callbackFn, delay) {
    let last;
    let timer;

    return (...args) => {
        let context = this;
        let now = +new Date();

        if ( last && now < last + delay ) {
            clearTimeout( timer );

            timer = setTimeout( () => {
                last = now;
                callbackFn.apply( context, args );
            }, delay );
        } else {
            last = now;
            callbackFn.apply( context, args );
        }

        return () => clearTimeout( timer );
    };
}
