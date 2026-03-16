/**
 * @param element {HTMLElement}
 * @returns {{width: *, height: *, offsetWidth: *, offsetHeight: *, top: number, left: number, bottom: number, right: number,
 *            x: number, y: number, marginLeft: number, marginTop: number, marginBottom: number, marginRight: number,
 *            paddingLeft: number, paddingTop: number, paddingBottom: number, paddingRight: number}}
 */
export default function getElementSizing(element) {
    const style = window.getComputedStyle( element );
    const display = style.display;
    const position = style.position;
    const visibility = style.visibility;
    const max_height = style.maxHeight.replace('px', '').replace('%', '');

    /** if it's not hidden we just return normal height */
    if ( display !== 'none' && max_height !== '0' ) {
        return getSizing( element );
    }

    /** the element is hidden, so we are making the element block, so we can measure its height but still be hidden */
    element.style.position   = 'absolute';
    element.style.visibility = 'hidden';
    element.style.display    = 'block';

    const sizing = getSizing( element );

    /** reverting to the original values */
    element.style.display = display;
    element.style.position = position === 'static' ? null : position;
    element.style.visibility = visibility === 'visible' ? null : visibility;

    return sizing;
}

/**
 * @param element {HTMLElement}
 * @returns {{width: *, height: *, offsetWidth: *, offsetHeight: *, top: number, left: number, bottom: number, right: number,
 *            x: number, y: number, marginLeft: number, marginTop: number, marginBottom: number, marginRight: number,
 *            paddingLeft: number, paddingTop: number, paddingBottom: number, paddingRight: number}}
 */
function getSizing(element) {
    const style = window.getComputedStyle( element );
    const rect = element.getBoundingClientRect();

    const width = element.offsetWidth + parseInt( style.marginLeft, 10 ) + parseInt( style.marginRight, 10 );
    const height = element.offsetHeight + parseInt( style.marginTop, 10 ) + parseInt( style.marginBottom, 10 );

    return {
        width,
        height,
        offsetWidth: element.offsetWidth,
        offsetHeight: element.offsetHeight,
        top: rect.top,
        left: rect.left,
        bottom: rect.bottom,
        right: rect.right,
        x: rect.x,
        y: rect.y,
        marginLeft: style.marginLeft,
        marginTop: style.marginTop,
        marginBottom: style.marginBottom,
        marginRight: style.marginRight,
        paddingLeft: style.paddingLeft,
        paddingTop: style.paddingTop,
        paddingBottom: style.paddingBottom,
        paddingRight: style.paddingRight,
    };
}