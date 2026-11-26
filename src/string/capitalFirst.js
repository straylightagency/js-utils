/**
 * Capitalize the first letter of a string.
 *
 * @example capitalFirst("lazy dog")
 * => "Lazy dog"
 *
 * @param {String} string
 * @returns {String}
 */
export default function capitalFirst(string) {
    string = string.toString();

    return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
}
