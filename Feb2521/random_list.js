// a random list generator using a six item array
//  parameter set for number of items in the random list
//  argument inputed by user

'use strict'

const array = ["milk", "bread", "water", "steak", "cheese", "potatoes", "beans"]

const listLoop = function(listLength) {   // listLength to determine how many items should be generated in the list

  for (let i=0; i < listLength; i++) {
    const rand = Math.floor(Math.random() * array.length);  //*  random number between 0 and array.length
    console.log(array[rand]);
  }

}

listLoop(4);  //* the argument defines how many items are in the list

