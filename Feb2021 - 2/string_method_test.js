const firstName = "Ed";
const lastName = "Irvine"

console.log(firstName.length);
console.log(lastName.length);

// Return last letter of firstName
console.log(firstName[firstName.length-1]);

// Concantenate first and last name
console.log(`${firstName} ${lastName}`);

// Find the index number of the 'v' in the last name
console.log(lastName.indexOf('v'));

// Slice out 'vine" from the last name
// slice(index of first letter, index of last letter)
console.log(lastName.slice(2,6));

// Change both names to uppercase
console.log(`${firstName.toUpperCase()} ${lastName.toUpperCase()}`);

// Replace 'ine' with 'ing'
console.log(lastName.replace('ine','ing'));

//  from Useful String Methods - MDN






