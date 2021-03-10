//  Building a web server using Express

const express = require('express')
const app = express()

app.get('/', function (request, response) {

  response.send("Server")

})

app.use(function (request, response) {
  response.status(404)
  response.send('404: File Not Found')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
  console.log(`Listening on port: ${PORT}`)
})

//  Line 3:  Declares a variable called "express" and uses the module.require() function to load the npm express module
//  Line 4:  Declares a variable called "app" which is assigned the object express(), which includes the method .get and .listen
//  Line 6:  Calls the app method .get, which handles GET requests, and is passed a callback function (handler function) 
//  Line 6:  The route will match requests to the root route, hence the '/' argument
//  Line 8:  Sends the HTTP response, which in this case is the string "Server"
//  Line 12: Call the app method .use which is used for error handling, therefore it is the very last of the middleware in the script
//  Line 12: It is passed a callback funtion with the objects request and response as arguments
//  Line 13: Invokes the repsonse.status method and passes it the number 404 as an argument, which is sent to the browser using HTTP
//  Line 14: Invokes the response.send method and passes it a string argument, which is the HTTP response
//  Line 17: Declares a variable called "PORT" which is assigned with either the process (builtin module) or 3000
//  Line 19: Calls the app method .listen, which is passed the Port to listen at and a callback function
//  Line 20: The callback function console.logs the phrase and along with the port number
//
//  How it works:
//  Line 3 loads the express module into the "express" variable
//  Line 4 thens passes the object express() into the "app" variable, app being a conventional name for an variable with an express object
//  Line 6 calls the app.get method, passes it the root directory as an argument, and a callbakc function with the objects request and response
//  Line 12 is used for error handling, and sends back a response with a status code and a string using HTTP
//  Line 17 defines the port that will be listened at
//  Line 19 calls the app.listen method, it's passed the port number and a callback function console.logging to indicate the server is listening
//
//  When you go to localhost:3000 the home page pops up with the 'Server' string.  If the browser calls for another page that doesn't exist,
//  the 404 error message is displayed
