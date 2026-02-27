/**
 * @param object {{}}
 * @param callbackFn {Function}
 * @returns {{[p: string]: unknown}}
 */
export default function filter(object, callbackFn) {
    return Object.fromEntries( Object.entries( object ).
            filter( ( [ key, value ] ) => callbackFn( value ) ) );
}