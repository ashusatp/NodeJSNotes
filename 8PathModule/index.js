const path = require('path');

// directory  
console.log(path.dirname('C:/Users/ASHUTOSH/OneDrive/Desktop/node/8PathModule/index.js'));
// or  
// console.log('DirName:', dirname(__filename));

// extention 
console.log(path.extname('C:/Users/ASHUTOSH/OneDrive/Desktop/node/8PathModule/index.js'));
// console.log('ExtName:', extname(__filename));


// fileName
console.log(path.basename('C:/Users/ASHUTOSH/OneDrive/Desktop/node/8PathModule/index.js'));
// console.log('fileName:', basename(__filename));


// ******************************************************
console.log('\n');

// ****** parse ---> it will privide root,dir,base,ext,name
console.log(path.parse('C:/Users/ASHUTOSH/OneDrive/Desktop/node/8PathModule/index.js'));

// how to get only name
const parse = path.parse('C:/Users/ASHUTOSH/OneDrive/Desktop/node/8PathModule/index.js');
console.log(parse.name); // ----> it will print index
console.log(parse.root); // ----> it will print root

// join  --> basically it will add many paths to generate one url
console.log('join :' , path.join(__dirname, '../12HTTPserver/index.js' , '../10npmMOD/index.js'));