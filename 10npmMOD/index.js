const chalk = require('chalk');
// console.log(chalk.bgRed.italic('Hello world!')); 
// console.log(chalk.black.bgGreen.italic('Success')); 
// console.log(chalk.red.italic.inverse('Error')); 

// *********** validator **************
var validator = require('validator');
const res = validator.isEmail('ashutoshworldking1234@gmail.com');
const res2 = validator.isEmail('ashutoshworldking1234gmail.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
console.log(res2 ? chalk.green.inverse(res2) : chalk.red.inverse(res2));