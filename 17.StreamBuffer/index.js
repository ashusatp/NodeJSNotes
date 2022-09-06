const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on('request', (req,res) => {
  // fs.readFile('note.txt','utf-8' ,(err , data) => {
  //     if(err) return console.log(err);
  //     res.end(data);
  // });

    // 2nd way 
    // Reading from a stream
    // Create a readable stream
    // Handle stream events --> data,end, and error
  
  const rstream = fs.createReadStream('note.txt');
  rstream.on('data', (chunkData)=> {
    res.write(chunkData);
  });
  rstream.on('end', ()=>{
    res.end();
  });
  rstream.on("error", (err)=>{
    console.log(err);
    res.end("File not found")
  });
});

server.listen(8000, "127.0.0.1");