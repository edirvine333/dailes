//  Building a web server using Express

const express = require('express')
const app = express()

app.get('/', function (request, response) {

  response.send("Server")

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
//  Line 12: Declares a variable called "PORT" which is assigned with either the process (builtin module) or 3000
//  Line 14: Calls the app method .listen, which is passed the Port to listen at and a callback function
//  Line 14: The callback function console.logs the phrase and along with the port number
//
//  How it works:
//  Line 3 loads the express module into the "express" variable
//  Line 4 thens passes the object express() into the "app" variable, app being a conventional name for an variable with an express object
//  Line 6 calls the app.get method, passes it the root directory as an argument, and a callbakc function with the objects request and response
//  Line 12 defines the port that will be listened at
//  Line 14 calls the app.listen method, it's passed the port number and a callback function console.logging to indicate the server is listening

