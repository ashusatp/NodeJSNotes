const fs = require("fs");

// ********* Create & OverWrite ********************
fs.writeFileSync('read.txt', "welcome to my home"); // it will create a new file
// if already file is present, then in that case data will be overwrite
fs.writeFileSync('read.txt', "Ashutosh , welcome to my home");


// ******** add some moreData ***********
fs.appendFileSync('read.txt',"\nHow are you i am fine thankyou" );

// ********* read data ******************

const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

// Node.js includes an additional data type called Buffer
// (not available in browser's javaScript).
// Buffer is mainly used to store binary data,
// while reading from a file or receiving packets over the network.

// {/* <Buffer 41 73 68 75 74 6f 73 68 20 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 68 6f 6d 65 0a 48 6f 77 20 61 72 65 20 79 6f 75 20 69 20 61 6d 20 66 69 6e ... 10 more bytes> */}

org_data = buf_data.toString();
console.log(org_data);

// ********* to rename the file ****************
fs.renameSync('read.txt', 'readWrite.txt');