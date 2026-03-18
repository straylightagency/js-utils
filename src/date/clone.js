/**
 * Clone a Date object.
 *
 * @param {Date} date
 * @returns {Date}
 */
export default function clone(date) {
    return new Date( date.getTime() );
}
