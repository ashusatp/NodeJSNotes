const http = require("http");
const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url == "/" ){
        res.end("Hello from the other sides Ashu");
    } else if(req.url == "/about"){
        res.end("Hello from the AboutUs sides Ashu");
    } else if(req.url == "/contact"){
        res.end("Hello from the ContactUs sides Ashu");
    } else{
        res.writeHead(404 , {"Content-type": "text/html"}); //status code for error
        res.end(" <h1> 404 error page. page doesn't exist </h1>");
    }
});

server.listen(7000 , "127.0.0.1", () => {
    console.log("listening to the port no. 7000");
});

// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes: 
// Informational responses(100-199),
// Successful responses(200-299),
// Redirects (300-399),
// Client errors (400-499),
// Server errors (500-599)