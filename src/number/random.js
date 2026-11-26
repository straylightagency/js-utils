/**
 * Return a random number between a min and a max number.
 *
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
export default function random(min = 0, max = 100) {
    if (!Number.isFinite(min) || !Number.isFinite(max)) {
        throw new TypeError('min and max must be finite numbers');
    }

    if (min > max) {
        throw new RangeError('min must be less than or equal to max');
    }

    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}
