var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Week 2 Homework"
   response.end('Week 2 Homework\n')
}).listen(3000)

// Console will print the message
console.log('Server running')