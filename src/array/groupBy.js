/**
 * Groups array items by a property name or an iteratee.
 * Returns an object whose groups are arrays; input is not mutated.
 *
 * @param {Array} array
 * @param {Function|string} iteratee
 * @returns {Array}
 */
export default function groupBy(array, iteratee) {
    if (typeof iteratee !== 'function' && typeof iteratee !== 'string') {
        throw new TypeError('groupBy() iteratee must be a function or property name');
    }

    const result = Object.create(null);

    for (const item of array) {
        const key = String(typeof iteratee === 'function' ? iteratee(item) : item?.[iteratee]);
        (result[key] ??= []).push(item);
    }

    return result;
}
