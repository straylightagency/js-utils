/**
 * Remove a value from the given array, returning a copy.
 *
 * @param {*} value
 * @returns {Object}
 */
export default function match(value) {
    const matchable = function () {
        this.value = value;
        this.heap = new Map;
        this.defaultCallback = () => this.value;
    }

    matchable.prototype.is = function (key, callback) {
        this.heap.set( key, callback );

        return this;
    };

    matchable.prototype.default = function (callback) {
        this.defaultCallback = callback;

        return this;
    };

    matchable.prototype.return = function () {
        const callback = this.heap.has( this.value ) ? this.heap.get( this.value ) : this.defaultCallback;

        return callback();
    };

    return new matchable( value );
}