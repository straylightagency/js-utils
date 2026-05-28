/**
 * @example stringToHtml('<p>my content</p>')
 *
 * @param {string} htmlString
 * @returns {Document|DocumentFragment}
 */
export default function stringToHtml(htmlString)
{
    const isFullDocument = /<html/i.test( htmlString );

    if ( isFullDocument ) {
        const parser = new DOMParser();
        return parser.parseFromString( htmlString, 'text/html' );
    } else {
        const range = document.createRange();
        return range.createContextualFragment( htmlString );
    }
};
