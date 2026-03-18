/**
 * Delegate an event through the Document to a selected element. Useful to define an event on an element which is not already created.
 * Returns a callback function that can be used to remove the event listener from the Document.
 *
 * @param {string} selector
 * @param {string} event
 * @param {Function} handler
 * @returns {function(): any}
 */
export default function delegate(selector, event, handler) {
    const callback = function (event) {
        const matchingElement = event.target.closest( selector );

        return matchingElement !== null ? handler.call( matchingElement, event ) : false;
    };

    Element.prototype.addEventListener.call( document, event, callback, true );

    return () => Element.prototype.removeEventListener.call( document, event, callback, true );
};