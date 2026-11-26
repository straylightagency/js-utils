/**
 * Format a number into a string with the given separators for thousands and decimal.
 *
 * @param {Number} number
 * @param {String} thousandsSeparator
 * @param {String} decimalSeparator
 * @param {Number} decimal
 * @returns {String}
 */
export default function format(number, thousandsSeparator = ' ', decimalSeparator = ',', decimal = 2) {
    return parseFloat( number.toString() ).toFixed( decimal ).replace( '.', decimalSeparator ).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + thousandsSeparator );
}
