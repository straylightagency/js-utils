/**
 * Deep-clones common built-in data structures and preserves circular references.
 * Functions are returned by reference. For supported platform-specific objects,
 * prefer native structuredClone() when its semantics suit your use case.
 *
 * @param {Object} value
 * @param {WeakMap} seen
 * @returns {Object}
 */
export default function deepClone(value, seen = new WeakMap()) {
    if (value === null || typeof value !== 'object') return value;
    if (seen.has(value)) return seen.get(value);

    if (value instanceof Date) return new Date(value.getTime());
    if (value instanceof RegExp) {
        const clone = new RegExp(value.source, value.flags);
        clone.lastIndex = value.lastIndex;
        return clone;
    }

    if (value instanceof Map) {
        const clone = new Map();
        seen.set(value, clone);
        for (const [key, item] of value) {
            clone.set(deepClone(key, seen), deepClone(item, seen));
        }
        return clone;
    }

    if (value instanceof Set) {
        const clone = new Set();
        seen.set(value, clone);
        for (const item of value) clone.add(deepClone(item, seen));
        return clone;
    }

    if (value instanceof ArrayBuffer) {
        const clone = value.slice(0);
        seen.set(value, clone);
        return clone;
    }

    if (ArrayBuffer.isView(value)) {
        if (value instanceof DataView) {
            const clone = new DataView(
                deepClone(value.buffer, seen),
                value.byteOffset,
                value.byteLength
            );
            seen.set(value, clone);
            return clone;
        }
        const clone = new value.constructor(value);
        seen.set(value, clone);
        return clone;
    }

    const clone = Array.isArray(value) ? [] : Object.create(Object.getPrototypeOf(value));

    seen.set(value, clone);

    for (const key of Reflect.ownKeys(value)) {
        const descriptor = Object.getOwnPropertyDescriptor(value, key);
        if ('value' in descriptor) {
            descriptor.value = deepClone(descriptor.value, seen);
        }
        Object.defineProperty(clone, key, descriptor);
    }

    return clone;
}
