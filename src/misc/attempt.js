/**
 * Attempt a Promise, returns the result or the error.
 *
 * @example const [result, error] = attempt(new Promise(...));
 *
 * @param {Promise} promise
 * @return {[]}
 */
export default async function attempt(promise) {
    let error = undefined;
    let result = undefined;

    try {
        result = await promise;
    } catch ( e ) {
        error = e;
    }

    return [ result, error ];
};
