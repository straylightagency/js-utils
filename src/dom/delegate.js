/**
 * @param selector {String}
 * @param event {String}
 * @param handler {Function}
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