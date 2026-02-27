/**
 * @param text {String}
 * @returns {Promise<void>}
 */
export default async function clipboard(text) {
    if ( typeof ( navigator.clipboard ) == 'undefined' ) {
        await new Promise( () => {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";  //avoid scrolling to bottom
            document.body.appendChild( textArea );
            textArea.focus();
            textArea.select();

            document.execCommand('copy');

            document.body.removeChild( textArea );
        } );

    } else {
        await navigator.clipboard.writeText( text );
    }
}