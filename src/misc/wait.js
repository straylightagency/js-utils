/**
 * @param timeMs {Number}
 * @returns {Promise<unknown>}
 */
export function wait(timeMs) {
    return new Promise( resolve => setTimeout( resolve, timeMs ) );
}

/**
 * @param time {Number}
 * @returns {Promise<*>}
 */
export function seconds(time) {
    return wait( time * 1000 );
}

/**
 * @param timeMs {Number}
 * @returns {Promise<*>}
 */
export function milliseconds(timeMs) {
    return wait( timeMs );
}

export default wait;