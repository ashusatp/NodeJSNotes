const fs = require("fs");

//  *********** writeFile **************
// fs.writeFile('read.txt', 'today is awesome day', 
// (err) =>{
//     console.log("file is created");
//     console.log(err);
// });

//  ******* appendFile *************
// fs.appendFile("read.txt", " plz like and subscribe my channel", 
// (err) => {
//     console.log("task completed");
// });

fs.readFile("read.txt","utf-8", (err,data)=>{
    console.log(data);
});