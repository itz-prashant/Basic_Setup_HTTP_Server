//Using http module (inbuilt given by node) we can setup a basic server

const  http = require('http')
const PORT = 3000
/**
 * HTTP module contain a function called as createServer
 * This createServer function takes a callback as the input
 * Now inside the callback ,we get two arguments
 * - request => This argument contains all the details about the incoming request
 * - response => This argument contains function using which we can prepare the response
 * The createServer function return us the server object
 */

const server = http.createServer((request,response)=>{
    console.log(request.url);
    response.end("Hello")
})

server.listen(PORT, ()=>{
    // Once the server started then this callback will be executed
    console.log("Server started on port", PORT);
})