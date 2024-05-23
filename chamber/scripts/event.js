const msToDays = 1000 * 60 * 60 * 24;
const theDateToday = new Date();
const today = Date.now();

const holidays = [
    { name: "New Year's Day", date: new Date(theDateToday.getFullYear() + 1, 0, 1) },
    { name: "Good Friday", date: getGoodFriday(theDateToday.getFullYear()) },
    { name: "Easter Monday", date: new Date(getGoodFriday(theDateToday.getFullYear()).getTime() + 3 * msToDays) },
    { name: "Victoria Day", date: getVictoriaDay(theDateToday.getFullYear()) },
    { name: "Canada Day", date: new Date(theDateToday.getFullYear(), 6, 1) },
    { name: "Labour Day", date: getLabourDay(theDateToday.getFullYear()) },
    { name: "Thanksgiving", date: getThanksgiving(theDateToday.getFullYear()) },
    { name: "Christmas", date: new Date(Date.UTC(theDateToday.getFullYear(), 11, 25)) }
];

if (theDateToday.getMonth() === 11 && theDateToday.getDate() > 25) {
    holidays[7].date.setFullYear(holidays[7].date.getFullYear() + 1);
}

holidays.forEach(holiday => {
    const daysLeft = calculateDaysLeft(holiday.date);
    const holidayElement = document.createElement('div');
    holidayElement.className = 'holiday';
    holidayElement.innerHTML = `<span class="label">${holiday.name}: </span><span class="value">${holiday.date.toDateString()} - ${daysLeft} days</span>`;
    document.querySelector('#holidaysList').appendChild(holidayElement);
});

function calculateDaysLeft(date) {
    return ((date.getTime() - today) / msToDays).toFixed(0);
}

function getGoodFriday(year) {
    const easterSunday = getEasterSunday(year);
    return new Date(easterSunday.getTime() - 2 * msToDays);
}

function getEasterSunday(year) {
    const f = Math.floor,
        G = year % 19,
        C = f(year / 100),
        H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
        I = H - f(H / 28) * (1 - f(H / 28) * f(29 / (H + 1)) * f((21 - G) / 11)),
        J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
        L = I - J,
        month = 3 + f((L + 40) / 44),
        day = L + 28 - 31 * f(month / 4);
    return new Date(year, month - 1, day);
}

function getVictoriaDay(year) {
    const date = new Date(year, 4, 24);
    date.setDate(date.getDate() - date.getDay());
    return date;
}

function getLabourDay(year) {
    const date = new Date(year, 8, 1);
    date.setDate(date.getDate() + (1 - date.getDay() + 7) % 7);
    return date;
}

function getThanksgiving(year) {
    const date = new Date(year, 9, 1);
    date.setDate(date.getDate() + (8 - date.getDay() + 7) % 7);
    return date;
}

