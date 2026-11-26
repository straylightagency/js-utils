/**
 * Deep comparison for arrays, plain/class objects and common built-ins.
 * Circular references are supported. Functions compare by reference.
 *
 * @param {Object} a
 * @param {Object} b
 * @param {WeakMap} pairs
 * @returns {Boolean}
 */
export default function deepEqual(a, b, pairs = new WeakMap()) {
    if (Object.is(a, b)) return true;
    if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
        return false;
    }
    if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;

    let paired = pairs.get(a);
    if (paired?.has(b)) return true;
    if (!paired) pairs.set(a, paired = new WeakSet());
    paired.add(b);

    if (a instanceof Date) return a.getTime() === b.getTime();
    if (a instanceof RegExp) return a.source === b.source && a.flags === b.flags;
    if (a instanceof ArrayBuffer) {
        return a.byteLength === b.byteLength &&
            new Uint8Array(a).every((byte, i) => byte === new Uint8Array(b)[i]);
    }
    if (ArrayBuffer.isView(a)) {
        if (a.byteLength !== b.byteLength) return false;
        const av = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        const bv = new Uint8Array(b.buffer, b.byteOffset, b.byteLength);
        return av.every((byte, i) => byte === bv[i]);
    }

    if (a instanceof Map) {
        if (a.size !== b.size) return false;
        for (const [key, value] of a) {
            if (!b.has(key) || !deepEqual(value, b.get(key), pairs)) return false;
        }
        return true;
    }

    if (a instanceof Set) {
        if (a.size !== b.size) return false;
        for (const value of a) if (!b.has(value)) return false;
        return true;
    }

    const keysA = Reflect.ownKeys(a);
    const keysB = Reflect.ownKeys(b);
    if (keysA.length !== keysB.length) return false;

    return keysA.every(key =>
        Object.hasOwn(b, key) &&
        deepEqual(a[key], b[key], pairs)
    );
}
