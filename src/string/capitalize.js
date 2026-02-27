/**
 * @param string {String}
 * @returns {String}
 */
export default function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
