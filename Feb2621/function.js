const num1 = 10;                            //  could be from user input
const num2 = 10;                            //  could be from user input
let answer;

const add = function () {                   //  declares a function called "add" that determines the value of the variable "answer" using addition
  answer = num1 + num2;
}

const subtract = function () {              //  declares a function called "subtract" that determeines the value of the variable "answer" using subtraction
  answer = num1 - num2;
}

const calculate = function () {             //  declares a function called calculate that console logs the value of the variable "answer"
  console.log(answer);
}

calculate(add());                           //  calls the function calculate and passes it the argument "add" as the function, not the value

calculate(subtract());                      //  calls the function calculate and passesit the argument "subtract" as the function, not the value
