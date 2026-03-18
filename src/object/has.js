import get from "./get";

/**
 * Get a value using a dot-notated key string
 *
 * @param {{}} object
 * @param {string} keys
 * @returns {*}
 */
export default function (object, keys) {
    return get( object, keys ) !== undefined;
}
