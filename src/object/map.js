/**
 * @param object {{}}
 * @param callbackFn {Function}
 * @returns {{}}
 */
export default function map(object, callbackFn) {
    return Object.keys( object ).reduce( ( result, key ) => {
        result[ key ] = callbackFn( object [ key ] );
        return result;
    }, {});
}