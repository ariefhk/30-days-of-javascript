/* Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 */
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();

const timeFormat = (initialTime) => {
    return initialTime < 10 ? `0${initialTime}` : initialTime;
};

const readableTime = `${year}-${timeFormat(month)}-${timeFormat(
    date
)} ${timeFormat(hour)}:${timeFormat(minute)}`;

console.log(readableTime);
