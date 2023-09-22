/* 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'. */
const challenge = "30 Days Of JavaScript";

/* 2. Print the string on the browser console using console.log() */
console.log("this printed on browser");

/* 3. Print the length of the string on the browser console using console.log() */
const someString = "this is string";
console.log("length of someString: ", someString.length);

/* 4. Change all the string characters to capital letters using toUpperCase() method */
const changeToUpper = "change this to Upper";
console.log("change variable changeToUpper: ", changeToUpper.toUpperCase());

/* 5. Change all the string characters to lowercase letters using toLowerCase() method */
const changeToLower = "CHANGE THIS TO LOWER";
console.log("change variable changeToLower: ", changeToLower.toLowerCase());

/* 6. Cut (slice) out the first word of the string using substr() or substring() method */
const exampleString = "my name arief";
console.log(exampleString.substring(0, 2));

/* 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript. */
const cutJavaScript = "30 Days Of JavaScript";
console.log(cutJavaScript.slice(10, cutJavaScript.length));

/* 8. Check if the string contains a word Script using includes() method */
const progLang = "JavaScriptLang";
console.log(progLang.includes("Script"));

/* 9. Split the string into an array using split() method */
const splitString = "Split this string";
console.log(splitString.split(""));

/* 10. Split the string 30 Days Of JavaScript at the space using split() method */
const splitStringJs = "30 Days Of JavaScript";
console.log(splitStringJs.split(" "));

/* 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array. */
const prograngLangNew =
    "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const splitProgLangNew = prograngLangNew.split(",");
console.log(splitProgLangNew);

/* 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method. */
const changeString = "30 Days Of JavaScript";
const replayJsToPy = changeString.replace("JavaScript", "Python");
console.log(replayJsToPy);

/* 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method. */
const checkChar15 = "30 Days Of JavaScript";
console.log(checkChar15.charAt(15));

/* 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt() */
const checkCharCode = "30 Days Of JavaScript";
console.log(checkCharCode.charCodeAt(11));

/* 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript*/
console.log("30 Days Of JavaScript".indexOf("3"));

/* 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.*/
console.log("30 Days Of JavaScript".lastIndexOf("D"));

/* 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'*/
console.log(
    "You cannot end a sentence with because because because is a conjunction".indexOf(
        "y"
    )
);

/* 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'*/
console.log(
    "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
        n
    )
);

/* 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'*/

console.log(
    "You cannot end a sentence with because because because is a conjunction".search(
        "You"
    )
);

/* 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.*/
console.log(" 30 Days Of JavaScript ".trim());
/* 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true*/
console.log("30 Days Of JavaScript".startsWith("3"));

/* 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true*/
console.log("30 Days Of JavaScript".endsWith("t"));

/* 23. Use match() method to find all the a’s in 30 Days Of JavaScript */
console.log("30 Days Of JavaScript".match(/s/gi));

/* 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript' */
console.log("30 Days of".concat("JavaScript"));

/*  Use repeat() method to print 30 Days Of JavaScript 2 times */
console.log("30 Days Of JavaScript ".repeat(2));
