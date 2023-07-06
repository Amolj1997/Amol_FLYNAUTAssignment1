// console.log("7" > 7);

// This comparison involves a string "7" and a number 7.
// JavaScript performs type coercion in this case, converting 
// the string to a number before making the comparison.
// To ensure accurate comparison, we can convert the number to a string and use the parseInt() function to convert the string "7" to the number 7.
// The modified code would be:
console.log(parseInt("7") > 7);


// console.log("2" > "21");
// This comparison involves two strings.
// JavaScript performs a lexicographic (dictionary) comparison when comparing strings.
// To ensure accurate comparison, we can use the localeCompare() function to compare 
// the strings in a lexicographic order.
// The modified code would be:

console.log("2".localeCompare("21") > 0);

// console.log("KL" > "S");
// This comparison involves two strings.
// JavaScript performs a lexicographic comparison.
// The modified code would be as it is since the comparison between 
// strings already provides the correct result.
console.log("KL" > "S");


