/**
 * Waits for `duration` milliseconds.
 * Pass an AbortSignal as the second argument to cancel the wait.
 *
 * @param {Number} duration
 * @param {signal: AbortSignal}
 * @returns Promise
 */
export default function sleep(duration = 0, { signal } = {}) {
    if (!Number.isFinite(duration) || duration < 0) {
        throw new RangeError('sleep() duration must be a non-negative finite number');
    }

    if (signal?.aborted) {
        return Promise.reject(signal.reason ?? new DOMException('Aborted', 'AbortError'));
    }

    return new Promise((resolve, reject) => {
        const timer = setTimeout(done, duration);

        function done() {
            signal?.removeEventListener('abort', abort);
            resolve();
        }

        function abort() {
            clearTimeout(timer);
            signal?.removeEventListener('abort', abort);
            reject(signal.reason ?? new DOMException('Aborted', 'AbortError'));
        }

        signal?.addEventListener('abort', abort, { once: true });
    });
}
