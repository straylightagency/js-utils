/**
 * Returns a shuffled copy using Fisher-Yates.
 * `random` can be injected for deterministic tests; it must return [0, 1).
 *
 * @param {Array} array
 * @param {Function} random
 * @returns {Array}
 */
export default function shuffle(array, random = Math.random) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const value = random();
        if (!(value >= 0 && value < 1)) {
            throw new RangeError('shuffle() random function must return a value in [0, 1)');
        }

        const j = Math.floor(value * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}
