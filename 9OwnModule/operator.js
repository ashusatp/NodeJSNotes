const add = (a,b)=>{
    return a+b;
};
const sub = (a,b)=>{
    return a-b;
};
const mult = (a,b)=>{
    return a*b;
};


const name ="Ashutosh";


// module.exports.kkrAdd = add;
// module.exports.kkrSub = sub;
// module.exports.kkrMult = mult;


// *************** sortCut of export ***************
module.exports = {add,sub,mult};