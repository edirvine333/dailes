const guit_pics = require('../public/guit_pics.js')

let image_title= ''

guit_pics.forEach(insert_image_title)
function insert_image_title (item, index) {
image_title = ` <p>${image_title} ${guit_pics[index].title}</p> `
}

module.exports = image_title

//  ***************************************************  COMMENTS  ************************************************************
// 
//  Line 1:  Declares the variable "guit_pics" and requires the custom module guit_pics.js, which is an array of objects (data)
//  Line 3:  Declares the variable "image_title" and assigns it a blank string
//  Line 5:  Invokes a forEach loop, using data from the custom module
//  Line 6:  A function called insert_image_title that uses the item and index from the forEach() loop
//  Line 7:  Makes a list of all the title items in the array of objects called from the guit_pics module
//  Line 7:  The list is assigned to the variable "image_title", which will be returned by the module
//  Line 10: Wraps the script into a module which exports the value of "image_title)"
//  
//  **************************************************************************************************************************
