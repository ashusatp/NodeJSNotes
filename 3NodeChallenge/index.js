// 1: create a folder named it Ashutosh
// 2: create a file named bio.txt and overWrite it
// 3: add more data into the file at the end of the existing data
// 4: read the data without getting the buffer data at first ---> File encoding
// 5: rename the file name to mybio.txt
// 6: now delete both the file and the folder


// const fs = require("fs");
// ****** create a folder *********
// fs.mkdirSync("Ashutosh");

// fs.writeFileSync("Ashutosh/bio.txt","My name is Ashutosh");
// fs.writeFileSync("Ashutosh/bio.txt","Hi everyone, My name is Ashutosh");
// fs.appendFileSync("Ashutosh/bio.txt","\nI am a Web Developer");


// // file encoding
// const data = fs.readFileSync('Ashutosh/bio.txt', "utf8"); // "utf8"  is for encoding 
// console.log(data);

// fs.renameSync('Ashutosh/bio.txt', 'Ashutosh/mybio.txt');

// remove file
// var filePath = 'C:/Users/ASHUTOSH/OneDrive/Desktop/node/3NodeChallenge/Ashutosh/mybio.txt'; 
// fs.unlinkSync(filePath);

// remove folder
// fs.rmdirSync('Ashutosh');



// ===============  File system by coderGyan  =======================
const fs = require("fs");
const path = require("path");

// ======== make a directory =========
// fs.mkdir(path.join(__dirname, '/test') , (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('folder created...');
// })

// ======== create a file ===========
// fs.writeFile(path.join(__dirname, './test' ,'test.txt'),'Hello Node',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('file created...');
// });

// ====== add new data without deteting =====
// fs.writeFile(path.join(__dirname, './test' ,'test.txt'),'Hello Node',(err)=>{
//     if(err){
//         throw err;
//     }

//     fs.appendFile(path.join(__dirname, './test' ,'test.txt'),' I am Ashutosh',(err)=>{
//         if(err){
//             throw err;
//         }
        
//         console.log('content Added...');
//     })

//     console.log('file created...');
// });

//  ======== read File ==========
fs.readFile(path.join(__dirname, './test' ,'test.txt'), (err,data)=>{

    if(err){
        throw err;
    }
    //console.log(data); // it will give buffer by default(thats why utf-8 has been used)  ====== or ======

    const content = Buffer.from(data);
    console.log(content.toString());
});
