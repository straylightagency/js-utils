/**
 * Execute a callback on each selected HTMLElements. These elements can be reached through a parent.
 * The function returns a NodeList at the end.
 *
 * @example onEachElements('nav .links', links => {...})
 * @example onEachElements(nav, '.links', links => {...})
 *
 * @param {string|HTMLElement} selectorOrParent
 * @param {Function|string} callbackOrSelector
 * @param {Function|null} callbackOrNull
 * @returns {*}
 */
export default function onEachElements(selectorOrParent, callbackOrSelector, callbackOrNull = null) {
    if ( typeof selectorOrParent === 'string' && typeof callbackOrSelector === 'function' && typeof callbackOrNull !== 'function' ) {
        const elements = document.querySelectorAll( selectorOrParent );

        elements.forEach( callbackOrSelector );

        return elements;
    }

    if ( typeof selectorOrParent === 'string' ) {
        selectorOrParent = document.querySelector( selectorOrParent );
    }

    if ( ! selectorOrParent ) {
        return;
    }

    const elements = selectorOrParent.querySelectorAll( callbackOrSelector );

    elements.forEach( callbackOrNull );

    return elements;
};