/**
 * Flattens nested arrays to the requested depth (Infinity by default).
 * Does not mutate the input.
 *
 * @param {Array} array
 * @param {Number} depth
 * @returns {Array}
 */
export default function flatten(array, depth = Infinity) {
    if (!Array.isArray(array)) {
        throw new TypeError('flatten() expects an array');
    }
    if (depth !== Infinity && (!Number.isInteger(depth) || depth < 0)) {
        throw new RangeError('flatten() depth must be a non-negative integer or Infinity');
    }

    return array.flat(depth);
}
