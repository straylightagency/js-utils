/**
 * Slugify a string. Second parameter allows you to choose the separator.
 *
 * @example slugify("The quick brown fox jumps over the lazy dog")
 * => "the-quick-brown-fox-jumps-over-the-lazy-dog"
 *
 * @param {string} string
 * @param {string} separator
 * @returns {string}
 */
export default function slugify(string, separator = '-') {
    string = string.trim().toLowerCase();

    /** replaces specials characters with hyphens */
    const from = "ãàáäâẽèéëêìíïîõòóöôøùúüûñç·/_,:;.";
    const to   = "aaaaaeeeeeiiiioooooouuuunc-------";

    for ( let i = 0, l = from.length; i < l; i++ ) {
        string = string.replace( from.charAt( i ), to.charAt( i ) );
    }

    string = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    return string
        .replace(/[^a-z0-9 -]/g, '') /** remove any non-alphanumeric characters */
        .replace(/\s+/g, separator ) /** replace spaces with hyphens */
        .replace(/-+/g, separator ); /** remove consecutive hyphens */
}
