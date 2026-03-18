/**
 * Interpolate a string with data.
 *
 * @example interpolate("The quick :color fox jumps over :who", {color: "brown", who: "the lazy dog"});
 * => "The quick brown fox jumps over the lazy dog"
 *
 * @param {string} string
 * @param {object} replace
 * @returns {string}
 */
export default function interpolate(string, replace = {}) {
    return string.replace( /:(\w+)/g, ( match, p1 ) =>
        replace[ p1 ] !== undefined ? replace[ p1 ] : ':' + p1
    );
}
