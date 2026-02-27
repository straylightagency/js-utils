/**
 * @param object {{}}
 * @param keys {[]}
 * @returns {{}}
 */
export default function only(object, keys) {
    return Object.entries( object ).reduce( (acc, [key, value]) => {
        if ( keys.indexOf( key ) !== -1 ) {
            acc[ key ] = value;
        }

        return acc;
    }, {} );
}
