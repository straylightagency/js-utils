import random from "../number/random.js";

/**
 * Retry a callback until success. Fourth parameter can be used to randomly choose the delay between each try.
 *
 * @example
 * retry( 5, nbr_of_try => {
 *   if ( do_something() ) {
 *       return "ok";
 *   }
 *
 *  throw "Failed after 5 tries";
 * }, 5000, 10000 );
 *
 * @param {number} times
 * @param {Function} callbackFn
 * @param {number} sleepMsMin
 * @param {number|null} sleepMsMax
 * @returns {Promise<unknown>}
 */
export default function (times, callbackFn, sleepMsMin = 100, sleepMsMax = null) {
    return new Promise( ( resolve, reject ) => {
        const fn = () => {
            times--;

            try {
                resolve( callbackFn( times ) );
            } catch ( e ) {
                if ( times < 1 ) {
                    reject( e );
                    return;
                }

                const sleepMs = sleepMsMax !== null ? random( sleepMsMin, sleepMsMax ) : sleepMsMin ;

                setTimeout( fn, sleepMs );
            }
        };

        fn();
    } );
};
