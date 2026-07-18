export { default as capitalFirst } from "./string/capitalFirst.js";
export { default as capitalWords } from "./string/capitalWords.js";
export { default as slugify } from "./string/slugify.js";
export { default as interpolate } from "./string/interpolate.js";
export { default as format } from "./number/format.js";
export { default as random } from "./number/random.js";
export { default as filter } from "./object/filter.js";
export { default as map } from "./object/map.js";
export { default as only } from "./object/only.js";
export { default as serialize } from "./object/serialize.js";
export { default as unserialize } from "./object/unserialize.js";
export { default as get } from "./object/get.js";
export { default as set } from "./object/set.js";
export { default as has } from "./object/has.js";
export { default as clipboard } from "./misc/clipboard.js";
export { default as match } from "./misc/match.js";
export { default as debounce } from "./misc/debounce.js";
export { default as nextTick } from "./misc/nextTick.js";
export { default as seconds } from "./misc/seconds.js";
export { default as milliseconds } from "./misc/milliseconds.js";
export { default as restoreBooleanAfter } from "./misc/restoreBooleanAfter.js";
export { default as throttle } from "./misc/throttle.js";
export { default as functionReviver } from "./misc/reviver.js";
export { default as functionReplacer } from "./misc/replacer.js";
export { default as addEventListeners } from "./dom/addEventListeners.js";
export { default as closestElement } from "./dom/closestElement.js";
export { default as delegate } from "./dom/delegate.js";
export { default as getFieldsValues } from "./dom/getFieldsValues.js";
export { default as getElementSizing } from "./dom/getElementSizing.js";
export { default as onEachElements } from "./dom/onEachElements.js";
export { default as unlessElementExists } from "./dom/unlessElementExists.js";
export { default as whenReady } from "./dom/whenReady.js";
export { default as whenResize } from "./dom/whenResize.js";
export { default as whenScroll } from "./dom/whenScroll.js";
export { default as getWeekNumber } from "./date/getWeekNumber.js";
export { default as clone } from "./date/clone.js";
export { default as dateReviver } from "./date/reviver.js";
export { default as initial } from "./array/initial.js";
export { default as last } from "./array/last.js";
export { default as remove } from "./array/remove.js";
export { default as replace } from "./array/replace.js";

import {isClass, isObject, isPlainObject} from "./misc/is.js";
import {decodeBase64, encodeBase64, isBase64} from "./misc/base64.js";

export {
    isClass,
    isObject,
    isPlainObject,
    decodeBase64,
    encodeBase64,
    isBase64
};