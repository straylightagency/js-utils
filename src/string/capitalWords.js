import capitalFirst from "./capitalFirst.js";

/**
 * Capitalize every word of a string.
 *
 * @example capitalWords("The quick brown fox jumps over the lazy dog")
 * => "The Quick Brown Fox Jumps Over The Lazy Dog"
 *
 * @param {string} string
 * @returns {string}
 */
export default function capitalWords(string) {
    const str_arr = string.split(' ');

    for( let i = 0; i < str_arr.length; i++ ) {
        str_arr[ i ] = capitalFirst( str_arr[ i ] );
    }

    return str_arr.join(' ');
}
