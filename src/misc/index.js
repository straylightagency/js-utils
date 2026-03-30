export { default as clipboard } from "./clipboard.js";
export { default as debounce } from "./debounce.js";
export { default as nextTick } from "./nextTick.js";
export { default as throttle } from "./throttle.js";
export { default as attempt } from "./attempt.js";
export { default as retry } from "./retry.js";
export { default as reviver } from "./reviver.js";
export { default as replacer } from "./replacer.js";

import {wait, seconds, milliseconds} from "./wait.js";
import {isClass, isObject, isPlainObject} from "./is.js";
import {decodeBase64, encodeBase64, isBase64} from "./base64.js";

export {
    wait,
    seconds,
    milliseconds,
    isClass,
    isObject,
    isPlainObject,
    decodeBase64,
    encodeBase64,
    isBase64,
};