/**
 * @param element {HTMLElement}
 * @param listeners {{}}
 */
export default function addEventListeners(element, listeners) {
    Object.fromEntries(
        Object.entries( listeners ).map( ([event, callbackFn]) => {
            element.addEventListener( event, callbackFn );

            return [ event, () => element.removeEventListener( event, callbackFn ) ];
        } )
    );
};