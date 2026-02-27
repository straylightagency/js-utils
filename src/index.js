import capitalize from "./string/capitalize.js";
import serialize from "./string/serialize.js";
import filter from "./object/filter.js";
import map from "./object/map.js";
import only from "./object/only.js";
import clipboard from "./misc/clipboard.js";
import debounce from "./misc/debounce.js";
import nextTick from "./misc/nextTick.js";
import throttle from "./misc/throttle.js";
import {wait, seconds, milliseconds} from "./misc/wait.js";
import {isClass, isObject, isPlainObject} from "./misc/is.js";
import addEventListeners from "./dom/addEventListeners.js";
import closestElement from "./dom/closestElement.js";
import delegate from "./dom/delegate.js";
import getFieldsValues from "./dom/getFieldsValues.js";
import onEachElements from "./dom/onEachElements.js";
import unlessElementExists from "./dom/unlessElementExists.js";
import whenReady from "./dom/whenReady.js";
import whenResize from "./dom/whenResize.js";
import getWeekNumber from "./date/getWeekNumber.js";
import initial from "./array/initial.js";
import last from "./array/last.js";
import remove from "./array/remove.js";

export default {
    initial,
    last,
    remove,
    getWeekNumber,
    addEventListeners,
    closestElement,
    delegate,
    getFieldsValues,
    onEachElements,
    unlessElementExists,
    whenReady,
    whenResize,
    clipboard,
    debounce,
    nextTick,
    throttle,
    wait,
    seconds,
    milliseconds,
    isClass,
    isObject,
    isPlainObject,
    filter,
    map,
    only,
    capitalize,
    serialize,
};