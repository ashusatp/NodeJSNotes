const os = require("os");

console.log('CPU architecture: ',os.arch()); //--> x64
console.log('CPU details: ', os.cpus());
console.log(os.hostname());
console.log('operating system platform: ',os.platform()); // --> window
console.log(os.tmpdir());
console.log('operating system type: ',os.type()); //--> windows

const freeMemory = os.freemem();
const totalMemory = os.totalmem();
console.log(`${freeMemory/1024/1024/1024}`);
console.log(`${totalMemory/1024/1024/1024}`);


// last system  operating 
console.log('Uptime: ', os.uptime());  //last restarting  or starting time of this pc or laptop