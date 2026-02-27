/**
 * @param callbackFn {Function}
 * @returns {Promise<unknown>}
 */
export default async function nextTick(callbackFn) {
    return new Promise(
        async resolve => requestIdleCallback( () =>
            setTimeout( async () => await resolve( await callbackFn() ), 0 )
        )
    );
}