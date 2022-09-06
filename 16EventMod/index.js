// Event Module 
// Node.js has a built-in module, called "Events",
// where you can create-, fire-, and listen for- your own events.
// Example 1- Registering for the event to be fired only one time using once.
// Example 2- Create an event emitter instance and register a couple of callbacks
// Example 3- Registering for the event with callback parameters.

// const EventEmitter  = require("events");  //we are creating a class with the help of events
// const event = new EventEmitter(); // here we are creating an object( named as event) with the help of the class
//*************** another method to create class and object ****************
// const event = require("events");
// const EventEmitter = new event.EventEmitter();

// ====== first we have to define an event  ========
// event.on("sayMyName", () => {
//     console.log("your name is Ashutosh");
// });
// event.on("sayMyName", () => {
//     console.log("your name is Ashu");
// });
// event.on("sayMyName", () => {
//     console.log("your name is Satapathy");
// });
// //  ===== after defining an event we can emit it ==========
// event.emit("sayMyName"); // emit --> listen

// ================ note ===================
//  the concept is quite simple: emitter objects emit named events that cause previously registered 
// listener to be called. so, an emitter object basically has two main features: 

//  1) Emitter name events. 
//  2) Registering and unregistering listener functions.

// const EventEmitter = require("events");
// const event = new EventEmitter();

// event.on("checkPage", (sc , msg)=>{
//     console.log(`status code is ${sc} and the page is ${msg}`);
// });
// event.emit("checkPage", 200, "ok");



// ================= Event Module by codergyan ===========
const Emitter = require('events'); // basically it returns a class




// const myEmitter = new Emitter();  // creating object of Emitter class
// // creating a event listner
// myEmitter.on('nameOfEvent', (data) =>{
//     console.log(data);
// })

// // Emitting  an event;
// myEmitter.emit('nameOfEvent', {
//     name: 'Ashutosh'
// });


//========= practicle example ===========

// creating class and extend Emitter class
class Auth extends Emitter{
    resister(userName){
        console.log('resister successfully...');
        this.emit('resistered', userName);
    }
}
// creating object or instance  of Auth class
const auth = new Auth();

//=========  Listen ========== 
// verify email
auth.on('resistered', (data) => {
    console.log(`sending email to ${data}`);
})
// sending welcome email
auth.on('resistered', (data) => {
    console.log(`sending welcome email to ${data}`);
})

// imp --> first listener will be executed then the emitter will be executed

auth.resister('Ashutosh');