/**
 * Execute callback once if called many times during a defined delay
 *
 * @param callbackFn {Function}
 * @param delay {Number}
 * @param immediate {Boolean}
 * @returns {(function(): void)|*}
 */
export default function debounce(callbackFn, delay, immediate = false) {
    let timer;

    return (...args) => {
        const now = immediate && !timer;

        clearTimeout( timer );

        timer = setTimeout( () => {
            timer = undefined;

            if ( !immediate ) callbackFn.apply( this, args );
        }, delay );

        if ( now ) callbackFn.apply( this, args );
    };
}
