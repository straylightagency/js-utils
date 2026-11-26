/**
 * Stop the main process for a moment defined in milliseconds.
 *
 * @param {Number} timeMs
 * @returns {Promise<*>}
 */
export default function milliseconds(timeMs) {
    return new Promise( resolve => setTimeout( resolve, timeMs ) );
}