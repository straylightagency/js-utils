/**
 * Delegate an event through an EventTarget container to a selected element. Useful to define an event on an element which is not already created.
 * Returns a callback function that can be used to remove the event listener from the Document.
 *
 * @param {String} selector
 * @param {String} event
 * @param {Function} handler
 * @param {EventTarget} target
 * @returns {function(): any}
 */
export default function delegate(selector, event, handler, target = document) {
    const wrappedFn = function (event) {
        const matchingElement = event.target instanceof Element
            ? event.target.closest(selector)
            : event.target.parentElement?.closest(selector);

        return matchingElement !== null ? handler.call( matchingElement, event ) : false;
    };

    Element.prototype.addEventListener.call( target, event, wrappedFn, true );

    return () => Element.prototype.removeEventListener.call( target, event, wrappedFn, true );
};