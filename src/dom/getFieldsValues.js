/**
 * Get an array of the fields value of an HTMLFormElement.
 *
 * @param {HTMLFormElement} form
 * @returns {{[p: string]: *}}
 */
export default function (form) {
    return Object.fromEntries(
        [ ...form.elements ]
            .map( item => {
                const value = item.type === 'checkbox' ? item.checked : item.value;

                return [ item.name, value ];
            } )
            .filter( ( [ key ] ) => key.length > 0 )
    );
}
