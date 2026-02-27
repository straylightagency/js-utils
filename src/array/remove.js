/**
 * @param array {[]}
 * @param value {*}
 * @returns {*}
 */
export default function remove(array, value) {
    const index = array.indexOf( value );

    if ( index > -1 ) {
        array.splice( index, 1 );
    }

    return array;
}
