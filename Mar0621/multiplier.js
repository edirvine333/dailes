const multFunc = function (multiplier) {                           // declares a function called multFunc with "multiplier" as a parameter

  const addFunc = function (num1, num2) {                          // declares a function called "addFunc" with two parameters, num1 and num2
    
    console.log(`Number: ${num1}`);                                // outputs the value of num1 to the console
    console.log(`Number: ${num2}`);                                // outputs the value of num2 to the console
    return num1 + num2;                                            // returns the sum of num1 and num2 to be assigned to the "sum" variable

  }

  const sum = addFunc(12,12);                                      // declares a variable called "sum" which is assigned the return value of addFunc
                                                                   // addFunc is sent the arguments "12" and "12"

  console.log(`The sum of the numbers is ${sum}`);                 // outputs the value of the "sum" variable
  console.log(`The multiplier is ${multiplier}`);                  // outputs the value of the parameter "multiplier"

  return sum * multiplier;                                         //  returns the product of the sum and the multiplier to be assigned to the "answer" variable

}

const answer = multFunc(2);                                        // declares the "answer" variable and assigns the return value of multFunc
                                                                   // multFunc is sent the argument "2"

console.log(`The sum times the multiplier is ${answer}`);          // outputs the value of the "answer" variable
