/**
 * Execute callback once if called many times during a defined delay. Returned function by the debouncer allows to cancel the internal timer.
 *
 * @param {Function} callbackFn
 * @param {Number} delay
 * @param {Boolean} immediately
 * @returns {(function(): void)|*}
 */
export default function debounce(callbackFn, delay, immediately = false) {
    let timer;

    return function (...args) {
        const now = immediately && !timer;

        clearTimeout( timer );

        timer = setTimeout( () => {
            timer = undefined;

            if ( ! immediately ) callbackFn.apply( this, args );
        }, delay );

        if ( now ) callbackFn.apply( this, args );

        return () => clearTimeout( timer );
    };
}
