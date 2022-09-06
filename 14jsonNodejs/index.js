// const bigData = {
//     name: "Ashutosh",
//     age: 19,
//     channel: "No"
// }

// // convert object into JSON
// const jsonData = JSON.stringify(bigData);
// console.log(jsonData);
// //{"name":"Ashutosh","age":19,"channel":"No"}

// // convert JSON into object
// const objData = JSON.parse(jsonData);
// console.log(objData);


//  ****************** challenges *************
//  1: convert to JSON 
//  2: add this JSON data into new file 
//  3: read that file
//  4: again coome back to the JS object  
//  5: console.log()


const fs = require("fs");

const bioData = {
    name: "Ashutosh",
    age: 19,
    channel: "No"
}

//  conversion of obj into JSON
const jsonData = JSON.stringify(bioData);

// Creation of new file 
fs.writeFile("json1.json", jsonData, (err)=>{
    console.log("done");
});

// read that created file
fs.readFile("json1.json","utf-8",(err, data)=>{
    console.log(data);  // it will give ison data

    // conversion of JSON into obj while reading
  const orgData = JSON.parse(data);
  console.log(orgData);
});