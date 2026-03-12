/**
 * @param element {HTMLElement}
 * @returns {DOMRect}
 */
export default function getElementSizing(element) {
    const el_style = window.getComputedStyle( element );
    const el_display = el_style.display;
    const el_position = el_style.position;
    const el_visibility = el_style.visibility;
    const el_max_height = el_style.maxHeight.replace('px', '').replace('%', '');
    let width, height;

    /** if it's not hidden we just return normal height */
    if ( el_display !== 'none' && el_max_height !== '0' ) {
        width = element.offsetWidth + parseInt( el_style.marginLeft, 10 ) + parseInt( el_style.marginRight, 10 );
        height = element.offsetHeight + parseInt( el_style.marginTop, 10 ) + parseInt( el_style.marginBottom, 10 );

        const rect = element.getBoundingClientRect();

        return Object.assign( rect, { width, height } );
    }

    /** the element is hidden, so we are making the element block, so we can measure its height but still be hidden */
    element.style.position   = 'absolute';
    element.style.visibility = 'hidden';
    element.style.display    = 'block';

    width = element.offsetWidth + parseInt( el_style.marginLeft, 10 ) + parseInt( el_style.marginRight, 10 );
    height = element.offsetHeight + parseInt( el_style.marginTop, 10 ) + parseInt( el_style.marginBottom, 10 );

    const rect = element.getBoundingClientRect();

    /** reverting to the original values */
    element.style.display = el_display;
    element.style.position = el_position === 'static' ? null : el_position;
    element.style.visibility = el_visibility === 'visible' ? null : el_visibility;

    return Object.assign( rect, { width, height } );
}