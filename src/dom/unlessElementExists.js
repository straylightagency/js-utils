/**
 * Execute a given callback on a selected HTMLElement. Can be used to select a child element through is parent and execute the callback on it.
 * The function always returns the selected (child) element.
 *
 * @example unlessElementExists('main.a button', button => {...});
 * @example unlessElementExists( mainElement , '.a button', button => {...});
 *
 * @param {String|HTMLElement} selectorOrParent
 * @param {Function|HTMLElement} callbackOrSelector
 * @param {Function|undefined} callbackOrNull
 * @returns {*}
 */
export default function unlessElementExists(selectorOrParent, callbackOrSelector, callbackOrNull = null) {
    if ( typeof selectorOrParent === 'string' )  {
        selectorOrParent = document.querySelector( selectorOrParent );
    }

    if ( selectorOrParent && typeof callbackOrSelector === 'function' && typeof callbackOrNull !== 'function' ) {
        callbackOrSelector( selectorOrParent );

        return selectorOrParent;
    }

    if ( ! selectorOrParent ) {
        return;
    }

    const element = selectorOrParent.querySelector( callbackOrSelector );

    if ( element && typeof callbackOrNull === 'function' ) {
        callbackOrNull( element );
    }

    return element;
};