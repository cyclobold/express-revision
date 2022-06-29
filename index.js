//importing express package/module
const express = require("express");
const cors = require("cors")

//set the port number for server
const PORT = 4000;

//create a server
const server = express();

server.use(cors());


const results = [
        {
            'name': 'James',
            'email': 'james@email.com',
            'id': 1
        }, 

        {
            'name': 'John',
            'email': 'john@email.com',
            'id': 2
        }, 

        {
            'name': 'Jerry',
            'email': 'jerry@email.com',
            'id': 3
        }, 

        {
            'name': 'Mary',
            'email': 'mary@email.com',
            'id': 4
        }, 



]


//create routes 

//home page
server.get("/", function(request, response){
    response.send("This is home page");
})

//about us
server.get("/about-us", function(request, response){
    response.send("This is About us page")

})

//search
server.get("/search", function(request, response){
    response.send({
        message: "Your search result is ready",
        data: results,
        code: 'success'
    });

})






//start the server...
server.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));