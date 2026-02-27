/**
 * @param selectorOrParent {String|HTMLElement}
 * @param callbackOrSelector {Function|HTMLElement}
 * @param callbackOrNull {Function|undefined}
 * @returns {*}
 */
export default function unlessElementExists(selectorOrParent, callbackOrSelector, callbackOrNull = null) {
    if ( typeof selectorOrParent === 'string' && typeof callbackOrSelector === 'function' && typeof callbackOrNull !== 'function' ) {
        const element = document.querySelector( selectorOrParent );

        if ( element ) {
            callbackOrSelector( element );
        }

        return element;
    }

    const element = selectorOrParent.querySelector( callbackOrSelector );

    if ( element &&  typeof callbackOrNull === 'function' ) {
        callbackOrNull( element );
    }

    return element;
};