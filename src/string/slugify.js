/**
 * Slugify a string. Second parameter allows you to choose the separator.
 *
 * @example slugify("The quick brown fox jumps over the lazy dog")
 * => "the-quick-brown-fox-jumps-over-the-lazy-dog"
 *
 * @param {String} string
 * @param {String} separator
 * @returns {String}
 */
export default function slugify(string, separator = '-') {
    return string
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, separator)
        .replace(new RegExp(`${separator}+$`), '')
        .replace(new RegExp(`^${separator}+`), '');
}