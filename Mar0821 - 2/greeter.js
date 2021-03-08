const input = process.argv.slice(2)

const name = input[0]
const lang = input[1]

if (lang === "en") {
  console.log(`Hello, ${name}`)
}
else if (lang === "sp") {
  console.log(`Hola, ${name}`)
}
else {
  console.log(`Huh`)
}

  //  Line 1:  Creates an array incorporating the arguments entered on the command line
  //  Line 3:  Declares a variable named "name" and assigns the array item value for the first argument
  //  Line 4:  Declares a variable named "lang" and assigns the array item value for the second argument
  //  Line 6:  Beginning of an if/else block that console.logs the appropriate greeting based on the lang argument

  
