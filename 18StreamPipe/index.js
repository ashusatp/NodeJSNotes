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
  

//   rstream.on('data', (chunkData)=> {
//     res.write(chunkData);
//   });
//   rstream.on('end', ()=>{
//     res.end();
//   });
//   rstream.on("error", (err)=>{
//     console.log(err);
//     res.end("File not found")
//   });

 // =========== 3rd way ===================

 const rstream = fs.createReadStream('note.txt');
 rstream.pipe(res);

});

server.listen(7000, "127.0.0.1");