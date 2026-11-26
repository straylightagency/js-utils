/**
 * Get a value using a dot-notated key string
 *
 * @param {Object} object
 * @param {String} path
 * @returns {any}
 */
export default function has(object, path) {
    const keys = path.split('.');

    return keys.every((key, index) => {
        if (object == null || !Object.hasOwn(object, key)) {
            return false;
        }

        object = object[key];

        return index === keys.length - 1 || object != null;
    });
}