class Matcher {
    constructor(value) {
        this.value = value;
        this.cases = new Map();
        this.defaultCallback = () => this.value;
    }

    is(key, callbackFn) {
        this.cases.set(key, callbackFn);
        return this;
    }

    default(callbackFn) {
        this.defaultCallback = callbackFn;
        return this;
    }

    return() {
        const callbackFn = this.cases.get(this.value)
            ?? this.defaultCallback;

        return callbackFn(this.value);
    }
}

/**
 * Functional switch, match a value based on a key from a Map.
 *
 * @param {any} value
 * @param {Object} cases
 * @returns {Object}
 */
export default function match(value, cases = {}) {
    const matcher = new Matcher(value);

    if ( Object.keys( cases ).length > 0 ) {
        Object.entries( cases ).forEach( ([key, callbackFn]) => {
            if ( key === 'default' ) {
                matcher.default( callbackFn );
                return;
            }

            matcher.is( key, callbackFn );
        } );
    }

    return matcher;
}