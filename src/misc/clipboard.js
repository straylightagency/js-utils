/**
 * Push the given string parameter into the clipboard. Use a polyfill if the new 'navigator.clipboard' is not available.
 *
 * @param {string} string
 * @returns {Promise<void>}
 */
export default async function clipboard(string) {
    if ( typeof navigator.clipboard === 'undefined' ) {
        await new Promise( () => {
            const textArea = document.createElement("textarea");
            textArea.value = string;
            textArea.style.position = "fixed";  //avoid scrolling to bottom
            document.body.appendChild( textArea );
            textArea.focus();
            textArea.select();

            document.execCommand('copy');

            document.body.removeChild( textArea );
        } );

    } else {
        await navigator.clipboard.writeText( string );
    }
}