import milliseconds from "./milliseconds.js";

/**
 * Stop the main process for a moment defined in seconds.
 *
 * @param {number} time
 * @returns {Promise<*>}
 */
export default function seconds(time) {
    return milliseconds( time * 1000 );
}