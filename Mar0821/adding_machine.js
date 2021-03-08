const number = process.argv.slice(2)

number.forEach(function(value, index) {
  number[index] = parseInt(number[index])
})

console.log(`${number[0]} plus ${number[1]} is ${number[0] + number[1]}`)

//  Line 1:  Creates an array called number using process.argv
//  Line 1:  The slice() method is used to remove the first two items of the array
//  Line 1:  The first two items are the full path of the `node` command and the full path of the file

//  Line 3:  A forEach() loop that loops through the sliced array
//  Line 4:  parseInt is used to change the array item from a string to a number

//  Line 7:  console.logs the template literal that displays the numbers and the sum

