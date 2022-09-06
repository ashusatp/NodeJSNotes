// challenge
// 1: create a folder named it Ashutosh
// 2: create a file named bio.txt and overWrite it
// 3: add more data into the file at the end of the existing data
// 4: read the data without getting the buffer data at first ---> File encoding
// 5: rename the file name to mybio.txt
// 6: now delete both the file and the folder

const fs = require("fs");

// ********* create folder *******
// fs.mkdir('Ashutosh', (err)=>{
//  console.log("folder created");
// });

//  *********** create file **********
// fs.writeFile('Ashutosh/bio.txt', " My name is Ashutosh Satapathy ", (err) =>{
//     console.log("file created");
// });

//  ********* add data *********
// fs.writeFile("Ashutosh/bio.txt","Hi, My name is Ashutosh Satapathy",(err)=>{
//     console.log("file rewritten");
// });

// ************ read Data without buffer( file encoding) ***************
// fs.readFile('Ashutosh/bio.txt',"utf-8",(err,data)=>{
//     console.log(data);
// })

// *************** rename the file *************
// fs.rename('Ashutosh/bio.txt', 'Ashutosh/mybio.txt', () =>{
//     console.log("file renamed");
// });

// ************ remove file **********
// fs.unlink('Ashutosh/mybio.txt',(err)=>{
//     console.log("file has been removed");
// });

// remove folder
fs.rmdir('Ashutosh', (err)=>{
    console.log("folder has been removed");
});