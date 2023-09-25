/* 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types. */
const firstName = "Arief Rachman";
const lastName = "Hakim";
const country = "Indonesia";
const city = "Ciamis";
const age = 21;
const isMarried = false;
const year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

/* 2. Check if type of '10' is equal to 10 */
console.log(typeof "10" === 10);

/* 3. Check if parseInt('9.8') is equal to 10 */
console.log(parseInt("9.8") === 10);

/* 4. Boolean value is either true or false. */
// - Write three JavaScript statement which provide truthy value.
console.log("isTruthy 1: ", true);
console.log("isTruthy 2: ", "this truthy");
console.log("isTruthy 3: ", 1);
// - Write three JavaScript statement which provide falsy value.
console.log("isFalsy 1: ", 0);
console.log("isFalsy 2: ", null);
console.log("isFalsy 3: ", undefined);

/* 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log() */
// - 4 > 3 //true
console.log("4 > 3 ,", 4 > 3);
// - 4 >= 3 //true
console.log("4 >= 3 ,", 4 >= 3);
// - 4 < 3 //false
console.log("4 < 3 ,", 4 < 3);
// - 4 <= 3 //false
console.log("4 <= 3 ,", 4 <= 3);
// - 4 == 4 //true
console.log("4 == 3 ,", 4 == 3);
// - 4 === 4 //true
console.log("4 === 3 ,", 4 === 3);
// - 4 != 4 //false
console.log("4 != 3 ,", 4 != 3);
// - 4 !== 4 //false
console.log("4 !== 3 ,", 4 !== 3);
// - Find the length of python and jargon and make a falsy comparison statement.
console.log(String("python".length) === Number("jargon".length));

/* 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log() */
// - 4 > 3 && 10 < 12 //true
console.log("4 > 3 && 10 < 12,", 4 > 3 && 10 < 12);
// - 4 > 3 && 10 > 12 //false
console.log("4 > 3 && 10 > 12,", 4 > 3 && 10 > 12);
// - 4 > 3 || 10 < 12 //true
console.log("4 > 3 || 10 < 12 ,", 4 > 3 || 10 < 12);
// - 4 > 3 || 10 > 12 //true
console.log("4 > 3 || 10 > 12,", 4 > 3 || 10 > 12);
// - !(4 > 3) //false
console.log("!(4 > 3),", !(4 > 3));
// - !(4 < 3) //true
console.log("!(4 < 3),", !(4 < 3));
// - !(false) //true
console.log("!(false),", !false);
// - !(4 > 3 && 10 < 12) //false
console.log("!(4 > 3 && 10 < 12),", !(4 > 3 && 10 < 12));
// - !(4 > 3 && 10 > 12) //true
console.log("!(4 > 3 && 10 > 12),", !(4 > 3 && 10 > 12));
// - !(4 === '4') //true
console.log("!(4 === '4'),", !(4 === "4"));
// - There is no 'on' in both dragon and python
console.log("dragon".includes("on") && "python".includes("on"));

/* 7. Use the Date object to do the following activities */
const date = new Date();
// - What is the year today?
console.log("This year: ", date.getFullYear());
// - What is the month today as a number?
console.log("This month: ", date.getMonth() + 1);
// - What is the date today?
console.log("This date: ", date.getDate());
// - What is the day today as a number?
console.log("This day: ", date.getDay() + 1);
// - What is the hours now?
console.log("This hours: ", date.getHours());
// - What is the minutes now?
console.log("This minutes: ", date.getMinutes());
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const past = new Date("1970-01-01");
const now = new Date();
const elapsed = now - past;
const elapsedToSecond = elapsed / 1000;
const elapsedToDay = elapsed / (1000 * 60 * 60 * 24);

console.log("Elapsed time: ", elapsedToSecond);
