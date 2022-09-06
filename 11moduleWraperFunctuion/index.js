(function(exports,require, module, __filename, __dirname){
    const name1 = "Ashuitosh";
    console.log(name1);
});
const name1 = "Ashutosh";
console.log(name1);

// IIFE 
(function(){   
    var a = "Ashu Satapathy";
    console.log(a);
})();
// console.log(a); // we can't use 'var a' not even in this file 
// know file name and directory name
console.log(__dirname);
console.log(__filename);