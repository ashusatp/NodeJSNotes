const http = require("http");
const fs = require("fs");
const { json } = require("stream/consumers");
const server = http.createServer((req, res) => {
    // console.log(req.url);

    const data = fs.readFileSync(`${__dirname}/userAPI/userAPI.json` , "utf-8");
    const orgData = JSON.parse(data);


    if(req.url == "/" ){
        res.end("Hello from the other sides Ashu");
    } else if(req.url == "/about"){
        res.end("Hello from the AboutUs sides Ashu");
    } else if(req.url == "/contact"){
        res.end("Hello from the ContactUs sides Ashu");
    } else if(req.url == "/userAPI"){
        // fs.readFile(`${__dirname}/userAPI/userAPI.json` , "utf-8" ,(err, data)=>{
        //     console.log(data);
        res.writeHead(200, {"Content-type": "userAPI/json"}); //status code for error
        //     const orgData = JSON.parse(data);
            res.end(orgData[2].name);
        //     // res.end(data);
        // }); it is call api contineously
        // res.end(`Hello from the userAPI sides Ashu` );
    } else{
        res.writeHead(404 , {"Content-type": "text/html"}); //status code for error
        res.end(" <h1> 404 error page. page doesn't exist </h1>");
    }
});

server.listen(8000 , "127.0.0.1", () => {
    console.log("listening to the port no. 8000");
});