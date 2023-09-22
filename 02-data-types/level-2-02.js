/* 1. Using console.log() print out the following statement: */
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(
    `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);

/* 2. Using console.log() print out the following quote by Mother Teresa: */
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(
    `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

/*  3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.*/
console.log(typeof "10" === 10);

/* 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.*/
console.log(parseFloat("9.8") === 10);

/* 5. Check if 'on' is found in both python and jargon */
console.log(
    Array.isArray("python".match(/on/gi)) &&
        Array.isArray("jargon".match(/on/gi))
);

/* 6. I hope this course is not full of jargon. Check if jargon is in the sentence. */
console.log("I hope this course is not full of jargon".includes("jargon"));

/* 7. Generate a random number between 0 and 100 inclusively. */
console.log(Math.floor(Math.random() * (100 - 0 + 1) + 0));

/* 8. Generate a random number between 50 and 100 inclusively. */
console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));

/* 9. Generate a random number between 0 and 255 inclusively. */
console.log(Math.floor(Math.random() * (100 - 0 + 1) + 0));

/* 10. Access the 'JavaScript' string characters using a random number. */
console.log(
    "JavaScript"[
        Math.floor(Math.random() * ("JavaScript".length - 1 - 0 + 1) + 0)
    ]
);

/* 11. Use console.log() and escape characters to print the following pattern. */
console.log("1 1 1 1\n2 1 2 4 8\n2 1 2 4 8\n2 1 2 4 8 \n5 1 5 25 125");

/* 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction' */
console.log(
    "You cannot end a sentence with because because because is a conjunction".slice(
        31,
        54
    )
);
