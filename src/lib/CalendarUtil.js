/***************************
 * @month number (0-11)
 * @year number 
 * Returns a number
 */
function getLastDayOfMonth(month = '', year = '') {
    if (month === '' || month > 11 || month < 0) {
        month = new Date().getMonth();
    }
    if (year === '') {
        year = new Date().getFullYear();
    }

    return new Date(year, month+1, 0).getDate();
}

function getMonthName(month = '') {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}

/*
// only grabs name doesn't mean it's right name is confusing
function getDayOfweek(dayOfWeek = '') {
    const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return daysOfWeek[dayOfWeek];
}
*/