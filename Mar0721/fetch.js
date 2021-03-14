const endpoint = 'url'                  // convention to assign the url to a variable called endpoint

fetch(endpoint)                            // insert resource https

  .then(function(response) {                    
                                        //  404 Not Found responses must be addressed in the first .then()
      if(!response.ok) {                //  using ! to make the statement "if response.ok is not true"
        throw new Error('Not 200 OK');  //  response is a callback function
      }                                 //  response.ok is a Boolean value indicating whether the response was successful
      
      return response.json();           //  returns a promise that resolves to a Javascript object                                    
  })                                    //  JSON that is returned from the server must be converetd to JS asynchronously

  .then(function(data) {
                                        // insert code that depends on the data in this block
  })

  .catch(function(err) {                // an error or `reject` from any of the above .then() blocks will end up here
                                        // insert code that depends on an error in the request or .then() functions
  })

});                                     // semi-colon ending the fetch() method