// Return a list of items from a custom module

const express = require('express');
const guit_pics = require('./public/guit_pics.js');    

const app = express();

app.get('/', function (request, response) {

  let image_url= '';

  guit_pics.forEach(insert_image_url);
  function insert_image_url (item, index) {
    image_url = ` ${image_url} ${guit_pics[index].imgURL} `;
  };

  response.send(image_url);
});

app.use(function (request, response) {
  response.status(404);
  response.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Listening on port: ${PORT}`);
});

//  **********************************************************  COMMENTS  ******************************************************************
//  
//  Line 3:  Load the Express module using the require keyword and assign it to the variable express
//  Line 4:  Load the custom module "guit_pics.js", found in the public folder in the root directory, using the require keyword
//  Line 6:  Declare a variable called "app" that is passed the function express().  This gives us the .get, .use, and .listen methods
//  Line 8:  Using the .get method to send a response when a request for the home page is made, hence the '/' argument
//  Line 8:  The function passes the objects request and response (convention), allowing us to use the .send() method
//  Line 10: Declares a variable called ?image_url" and assigns it an empty string, which will be concantenated to produce a list
//  Line 12: Starts a forEach() loop to loop through each item of the object returned from the custom module
//  Line 14: The function invoked by the forEach() loop that concantenates the .imgURL items in the array of objects caled "guit_pics"
//  Line 14: Recall the array of objects "guit_pics" is assigned the array from the custom module
//  Line 18: Using the response function with the .send method to reply to the browser with the concantenated string of all .imgURL items
//  Line 21: Error handling using the .use method of the app function.  The callback function is passing the request and response objects
//  Line 22: The response function using the .status method to send an error code of the number 404 back to the server if there is an error
//  Line 23: The response function using the .send method to respond to the server with a string '404: File Not Found'
//  Line 27: Declares a variable cannled "PORT" that either calls the .env variable PORT from the .env file or defaults to 3000
//  Line 29: Use the app function with the .listen method, which is passed the arguments PORT (defined above) and a callback function
//  Line 30: The callback function console.logs the string which indicates to the CLI that the server is active and listening for a request
//  
//  ***************************************************************************************************************************************