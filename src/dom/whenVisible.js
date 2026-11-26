import whenIntersect from './whenIntersect.js';

/**
 * Calls `callbackFn` when the element enters the viewport.
 * By default, disconnects after the first visible entry.
 * Set { once: false } to receive later enter/leave changes as well.
 * Returns a function that disconnects the observer.
 *
 * @param {Element} target
 * @param {(entry: IntersectionObserverEntry) => void} callbackFn
 * @param {Object} options
 */
export default function whenVisible(target, callbackFn, options = {}) {
    const { once = true, ...observerOptions } = options;

    let stop = () => {};
    stop = whenIntersect(target, entries => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                callbackFn(entry);
                if (once) {
                    stop();
                    return;
                }
            }
        }
    }, observerOptions);

    return stop;
}
