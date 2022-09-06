// const oper = require("./operator");
// console.log(oper); // ------> it will print an object considered all exported files of modules
// console.log(oper.kkrAdd(5,5));
// console.log(oper.kkrSub(10,5));



//  ********* sortCut *****
// const { kkrAdd, kkrSub, kkrMult} = require("./operator");
// console.log(kkrAdd(5,5));
// console.log(kkrSub(10,5));
// console.log(kkrMult(10,5));

// ************** based on new sortcut of exportation *************
const {add,sub,mult} = require("./operator");
console.log(add(5,5));
console.log(sub(10,5));
console.log(mult(10,5));