const fs = require("fs");

// ****** syncronous Way ***********
    // const data = fs.readFileSync("readWrite.txt","utf-8");
    // console.log(data); // it will be printed first
    // console.log("after the data");

// ************ Async way **********

fs.readFile("readWrite.txt", "utf-8", (err , data) => {
 console.log(data);
});
console.log("after the data"); // it will be printed first 