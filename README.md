# @straylightagency/utils

A collection of lightweight JavaScript utility functions for everyday development.

`@straylightagency/utils` provides a set of reusable helpers for working with arrays, objects, strings, numbers, dates, the DOM, and common JavaScript tasks.

The library is designed to keep things simple: small utilities, a straightforward API, and no external dependencies.

## Features

- Native ES modules.
- Zero runtime dependencies.
- Lightweight and modular.
- Utilities grouped by category.
- Import individual helpers or use the main entry point.
- Designed for modern JavaScript environments.

## Table of contents

- [Installation](#installation)
- [Quick start](#quick-start)
- [Available functions](#available-functions)
- [Array](#array-1)
- [Date](#date-1)
- [DOM](#dom-1)
- [Miscellaneous](#miscellaneous-1)
- [Number](#number-1)
- [Object](#object-1)
- [String](#string-1)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package using npm:

```bash
npm install @straylightagency/utils
```

## Quick start

Import the helpers you need from the package:

```js
import {
    difference,
    deepClone,
    slugify,
    clamp,
} from '@straylightagency/utils';

const values = difference([1, 2, 3], [2]);

const copy = deepClone({
    name: 'Straylight',
    services: ['design', 'development'],
});

const slug = slugify('Hello World');

const value = clamp(120, 0, 100);
```

You can also import helpers from their respective category entry points when available.

---

## Available functions

### Array

Utilities for manipulating and transforming arrays.

| Function | Description |
| --- | --- |
| [`difference()`](#difference) | Returns the elements present in one array but not the other |
| [`flatten()`](#flatten) | Flattens nested arrays |
| [`groupBy()`](#groupby) | Groups array elements by a property or callback |
| [`initial()`](#initial) | Returns all elements except the last |
| [`intersection()`](#intersection) | Returns the common elements between arrays |
| [`last()`](#last) | Returns the last element of an array |
| [`move()`](#move) | Moves an element from one position to another |
| [`remove()`](#remove) | Removes an element from an array |
| [`replace()`](#replace) | Replaces an element in an array |
| [`shuffle()`](#shuffle) | Randomly shuffles array elements |
| [`unique()`](#unique) | Returns an array containing unique values |

### Date

Utilities for working with dates and date-related data.

| Function | Description |
| --- | --- |
| [`clone()`](#clone) | Clones a Date instance |
| [`getWeekNumber()`](#getweeknumber) | Returns the week number of a date |

### DOM

Utilities for interacting with DOM elements and browser events.

| Function | Description |
| --- | --- |
| [`addEventListeners()`](#addeventlisteners) | Registers multiple event listeners |
| [`closestElement()`](#closestelement) | Finds the closest matching element |
| [`delegate()`](#delegate) | Handles events through delegation |
| [`getElementSizing()`](#getelementsizing) | Retrieves element sizing information |
| [`getFieldsValues()`](#getfieldsvalues) | Retrieves values from form fields |
| [`onEachElements()`](#oneachelements) | Executes a callback for matching elements |
| [`stringToHtml()`](#stringtohtml) | Converts an HTML string into DOM elements |
| [`unlessElementExists()`](#unlesselementexists) | Executes logic when an element is not found |
| [`whenIntersect()`](#whenintersect) | Observes element intersection |
| [`whenMutation()`](#whenmutation) | Observes DOM mutations |
| [`whenReady()`](#whenready) | Executes a callback when the DOM is ready |
| [`whenResize()`](#whenresize) | Observes element or window resizing |
| [`whenScroll()`](#whenscroll) | Observes scrolling |
| [`whenVisible()`](#whenvisible) | Executes logic when an element becomes visible |

### Miscellaneous

General-purpose utilities for common JavaScript tasks.

| Function | Description |
| --- | --- |
| [`attempt()`](#attempt) | Executes a function and handles errors |
| [`clipboard()`](#clipboard) | Copies content to the clipboard |
| [`debounce()`](#debounce) | Delays execution until calls stop |
| [`match()`](#match) | Matches a value against a pattern |
| [`milliseconds()`](#milliseconds) | Converts a time value to milliseconds |
| [`once()`](#once) | Ensures a function runs only once |
| [`restoreAfter()`](#restoreafter) | Restores a value after a delay |
| [`retry()`](#retry) | Retries an operation |
| [`seconds()`](#seconds) | Converts a time value to seconds |
| [`sleep()`](#sleep) | Pauses asynchronous execution |
| [`throttle()`](#throttle) | Limits the execution frequency of a function |

### Number

Utilities for working with numbers.

| Function | Description |
| --- | --- |
| [`clamp()`](#clamp) | Restricts a value to a range |
| [`format()`](#format) | Formats a number |
| [`random()`](#random) | Generates a random number |

### Object

Utilities for manipulating and inspecting objects.

| Function | Description |
| --- | --- |
| [`deepClone()`](#deepclone) | Creates a deep copy of a value |
| [`deepEqual()`](#deepequal) | Compares two values for deep equality |
| [`entries()`](#entries) | Retrieves object entries |
| [`filter()`](#filter) | Filters object properties |
| [`get()`](#get) | Retrieves a nested property |
| [`has()`](#has) | Checks whether a property exists |
| [`invert()`](#invert) | Reverses object keys and values |
| [`isObject()`](#isobject) | Checks whether a value is an object |
| [`isPlainObject()`](#isplainobject) | Checks whether a value is a plain object |
| [`isType()`](#istype) | Checks the type of a value |
| [`map()`](#map) | Maps object properties |
| [`merge()`](#merge) | Merges objects |
| [`omit()`](#omit) | Omits specified properties |
| [`only()`](#only) | Keeps specified properties |
| [`pick()`](#pick) | Selects specified properties |
| [`serialize()`](#serialize) | Serializes a value |
| [`set()`](#set) | Sets a nested property |
| [`unserialize()`](#unserialize) | Restores a serialized value |

### String

Utilities for manipulating strings.

| Function | Description |
| --- | --- |
| [`capitalFirst()`](#capitalfirst) | Capitalizes the first character |
| [`capitalWords()`](#capitalwords) | Capitalizes words in a string |
| [`interpolate()`](#interpolate) | Interpolates values into a string |
| [`slugify()`](#slugify) | Converts a string into a slug |

## Array

### `difference()`

Returns the elements from the first array that are not present in the second.

### `flatten()`

Flattens a nested array structure into a single array.

### `groupBy()`

Groups array elements according to a property or grouping function.

### `initial()`

Returns a new array containing every element except the last one.

### `intersection()`

Returns the elements shared by two arrays.

### `last()`

Returns the last element of an array.

### `move()`

Moves an element from one index to another.

### `remove()`

Removes an element from an array.

### `replace()`

Replaces an element in an array.

### `shuffle()`

Randomly reorders the elements of an array.

### `unique()`

Returns an array with duplicate values removed.

## Date

### `clone()`

Creates a copy of a Date instance.

### `getWeekNumber()`

Returns the week number corresponding to a date.

## DOM

### `addEventListeners()`

Registers multiple event listeners on an element.

### `closestElement()`

Finds the closest ancestor matching a selector.

### `delegate()`

Registers delegated event listeners.

### `getElementSizing()`

Retrieves sizing information from a DOM element.

### `getFieldsValues()`

Collects values from form fields.

### `onEachElements()`

Runs a callback for each element matching a selector.

### `stringToHtml()`

Converts an HTML string into DOM elements.

### `unlessElementExists()`

Runs a callback or operation if the target element exists.

### `whenIntersect()`

Observes when an element intersects with a target or viewport.

### `whenMutation()`

Observes changes in the DOM using a MutationObserver.

### `whenReady()`

Runs a callback once the document is ready.

### `whenResize()`

Observes resize events on a target element or the window.

### `whenScroll()`

Observes scroll events.

### `whenVisible()`

Runs logic when an element becomes visible.

## Miscellaneous

### `attempt()`

Executes a function while providing a way to handle potential errors.

### `clipboard()`

Copies content to the clipboard.

### `debounce()`

Delays the execution of a function until a specified period has elapsed without further calls.

### `match()`

Matches a value against a pattern or condition.

### `milliseconds()`

Converts a time value into milliseconds.

### `once()`

Creates a function that can only be executed once.

### `restoreAfter()`

Restores a value or state after a specified delay.

### `retry()`

Retries an operation according to the provided configuration.

### `seconds()`

Converts a time value into seconds.

### `sleep()`

Returns a Promise that resolves after a specified delay.

### `throttle()`

Ensures a function is not executed more frequently than a specified interval.

## Number

### `clamp()`

Restricts a number to a specified minimum and maximum range.

### `format()`

Formats a number according to the provided options.

### `random()`

Generates a random number within the specified range.

## Object

### `deepClone()`

Creates a deep copy of a value.

### `deepEqual()`

Compares two values to determine whether they are deeply equal.

### `entries()`

Returns the entries of an object.

### `filter()`

Filters an object's properties according to a condition.

### `get()`

Retrieves a nested property using a path.

### `has()`

Checks whether an object contains a property at a given path.

### `invert()`

Creates a new object with keys and values reversed.

### `isObject()`

Checks whether a value is an object.

### `isPlainObject()`

Checks whether a value is a plain object.

### `isType()`

Checks whether a value matches a specified type.

### `map()`

Transforms the properties of an object using a callback.

### `merge()`

Merges multiple objects.

### `omit()`

Creates an object without the specified properties.

### `only()`

Creates an object containing only the specified properties.

### `pick()`

Selects specific properties from an object.

### `serialize()`

Serializes a value into a format suitable for storage or transmission.

### `set()`

Sets a nested property using a path.

### `unserialize()`

Restores a value from its serialized representation.

## String

### `capitalFirst()`

Capitalizes the first character of a string.

### `capitalWords()`

Capitalizes words in a string.

### `interpolate()`

Replaces placeholders in a string with values.

### `slugify()`

Converts a string into a URL-friendly slug.

---

## Contributing

Contributions, bug reports, and feature requests are welcome.

- Fork the repository.
- Create a feature branch.
- Make your changes.
- Test the affected functionality.
- Submit a pull request.

Repository: https://github.com/straylightagency/js-utils

Report issues: https://github.com/straylightagency/js-utils/issues

## License

`@straylightagency/utils` is released under the MIT License.

See the [LICENSE](./LICENSE) file for details.
