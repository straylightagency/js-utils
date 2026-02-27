/**
 * @param selectorOrParent {String|HTMLElement}
 * @param callbackOrSelector {Function|HTMLElement}
 * @param callbackOrNull {Function|undefined}
 * @returns {*}
 */
export default function onEachElements(selectorOrParent, callbackOrSelector, callbackOrNull) {
    if ( typeof selectorOrParent === 'string' && typeof callbackOrSelector === 'function' && typeof callbackOrNull !== 'function' ) {
        const elements = document.querySelectorAll( selectorOrParent );

        elements.forEach( callbackOrSelector );

        return elements;
    }

    const elements = selectorOrParent.querySelectorAll( callbackOrSelector );

    elements.forEach( callbackOrNull );

    return elements;
};