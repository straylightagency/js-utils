/**
 * Returns a copy of `array` with the item at `from` moved to `to`.
 * Negative indices count from the end. Out-of-range indices are clamped.
 *
 * @param {Array} array
 * @param {Number} from
 * @param {Number} to
 * @returns {Array}
 */
export default function move(array, from, to) {
    const result = [...array];
    const length = result.length;

    const normalize = index => {
        index = Math.trunc(index);
        return Math.max(0, Math.min(length - 1, index < 0 ? length + index : index));
    };

    if (!length) return result;

    const start = normalize(from);
    const end = normalize(to);
    const [item] = result.splice(start, 1);
    result.splice(end, 0, item);

    return result;
}
