/**
 * Execute the given callback function during a browser's idle periods. Allow to perform background task on the main thread without impacting latency-critical events.
 *
 * @param {Function} callbackFn
 * @returns {Promise<unknown>}
 */
export default async function nextTick(callbackFn) {
    return new Promise(
        async resolve => requestIdleCallback( () => async () => resolve( await callbackFn() )
        )
    );
}