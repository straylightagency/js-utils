/**
 * Define event listeners on an element and returns an object with a callback for removing these listeners on each event.
 *
 * @example const removeListeners = addEventListeners(button, {
 *     click: (event) => {...},
 *     mouseover: (event) => {...},
 * } );
 * removeListeners.click();
 * => click event has been removed from the button
 *
 * @param {HTMLElement} element
 * @param {{}} listeners
 */
export default function addEventListeners(element, listeners) {
    Object.fromEntries(
        Object.entries( listeners ).map( ([event, callbackFn]) => {
            element.addEventListener( event, callbackFn );

            return [ event, () => element.removeEventListener( event, callbackFn ) ];
        } )
    );
};