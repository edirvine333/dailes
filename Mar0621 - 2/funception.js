const b = function (age) {                     //  Creation phase declares the variable "b" and it is in the global context
                                               //  Execution phase assigns the function to the global variable "b"
  console.log(`Function B: ${age}`);           //  When invoked, the "age" variable from the "a" function scope is passed to the "b" function parameter
}                                              //  Then goes through execution phase and executes the console.log function

const a = function () {                        //  Creation phase declares the variable "a" and it is in the global context
  let age = 2;                                 //  Execution phase assigns the anonymous function to the global variable "a"
  console.log(`Function A: ${age}`);           //  When invoked, starts a new creation phase where the "age" variable is declared in the function scope
  b(age);  // function "b" invocation          //  Then goes through execution phase, assigns the number 2 to "age" and executes the console.log function
}          // passes "age" as argument

let age = 1;                                   //  Creation phase declares the variable "age" in the global context 
console.log(`Declared Globally: ${age}`);      //  Execution phase assigns the number 1 to the global variable "age" and executes the console.log function

a();  // function "a" invocation
