import isPlainObject from "../object/isPlainObject.js";

/**
 * Deep-merges source objects into a new object.
 * Plain objects merge recursively; arrays and other values replace.
 * Does not mutate the source objects.
 *
 * @param {Object} objects
 * @returns {Object}
 */
export default function merge(...objects) {
    return objects.reduce((result, source) => {
        if (source == null) return result;
        if (!isPlainObject(source)) {
            throw new TypeError('merge() expects plain objects or nullish values');
        }
        return mergeInto(result, source);
    }, {});
}

const define = (target, key, value) => {
    Object.defineProperty(target, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
    });
};

function mergeInto(target, source) {
    for (const key of Reflect.ownKeys(source)) {
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;

        const sourceValue = source[key];
        const targetValue = Object.hasOwn(target, key) ? target[key] : undefined;

        if (isPlainObject(sourceValue)) {
            const base = isPlainObject(targetValue) ? targetValue : {};
            define(target, key, mergeInto({ ...base }, sourceValue));
        } else {
            define(target, key, sourceValue);
        }
    }

    return target;
}
