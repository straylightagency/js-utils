/**
 * Get the week number of a Date object from the start of the year.
 *
 * @example getWeekNumber( new Date('Mon Mar 16 2026') )
 * => 12
 *
 * @param {Date} date
 * @returns {number}
 */
export default function getWeekNumber(date) {
    date.setHours(0, 0, 0, 0);
    date.setDate( date.getDate() + 3 - ( date.getDay() + 6 ) % 7 );

    const first_week = new Date( date.getUTCFullYear(), 0, 4 );

    return 1 + Math.round(( ( date.getTime() - first_week.getTime() ) / 86400000 - 3 + ( first_week.getDay() + 6 ) % 7 ) / 7 );
}
