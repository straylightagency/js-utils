/**
 * Observes intersection changes for an element.
 * Returns a function that disconnects the observer.
 *
 * @param {Element} target
 * @param {(entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void} callbackFn
 * @param {IntersectionObserverInit} options
 */
export default function whenIntersect(target, callbackFn, options = {}) {
    if (!(target instanceof Element)) {
        throw new TypeError('whenIntersect() target must be an Element');
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError('whenIntersect() callback must be a function');
    }
    if (typeof IntersectionObserver === 'undefined') {
        throw new Error('IntersectionObserver is not supported in this environment');
    }

    const observer = new IntersectionObserver(callbackFn, options);
    observer.observe(target);

    return () => observer.disconnect();
}
