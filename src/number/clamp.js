/**
 * Clamps a value within a range of values between a defined minimum bound and a maximum bound.
 *
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
export default function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
