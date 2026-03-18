/**
 * Stop the main process for a moment defined in milliseconds.
 *
 * @param {number} timeMs
 * @returns {Promise<unknown>}
 */
export function wait(timeMs) {
    return new Promise( resolve => setTimeout( resolve, timeMs ) );
}

/**
 * Stop the main process for a moment defined in seconds.
 *
 * @param {number} time
 * @returns {Promise<*>}
 */
export function seconds(time) {
    return wait( time * 1000 );
}

/**
 * Alias to `wait`. Stop the main process for a moment defined in milliseconds.
 *
 * @param {number} timeMs
 * @returns {Promise<*>}
 */
export function milliseconds(timeMs) {
    return wait( timeMs );
}

export default wait;