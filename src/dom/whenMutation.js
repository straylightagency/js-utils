/**
 * Observes DOM mutations on a target.
 * `options` is passed to MutationObserver.observe().
 * Returns a function that disconnects the observer.
 *
 * @param {Element} target
 * @param {(mutations: MutationRecord[], observer: MutationObserver) => void} callbackFn
 * @param {MutationObserverInit} options
 */
export default function whenMutation(target, callbackFn, options = {
    childList: true,
    subtree: true
}) {
    if (!(target instanceof Node)) {
        throw new TypeError('whenMutation() target must be a Node');
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError('whenMutation() callback must be a function');
    }
    if (typeof MutationObserver === 'undefined') {
        throw new Error('MutationObserver is not supported in this environment');
    }

    const observer = new MutationObserver(callbackFn);
    observer.observe(target, options);

    return () => observer.disconnect();
}
