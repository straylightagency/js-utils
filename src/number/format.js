/**
 * @param {number} number
 * @param {string} thousandsSeparator
 * @param {string} decimalSeparator
 * @param {number} decimal
 * @returns {string}
 */
export default function format(number, thousandsSeparator = ' ', decimalSeparator = ',', decimal = 2) {
    return parseFloat( number.toString() ).toFixed( decimal ).replace( '.', decimalSeparator ).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + thousandsSeparator );
}
