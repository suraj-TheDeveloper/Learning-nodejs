const events = require('events'); //importing event module
const emitter = events.EventEmitter(); //initializing event object
const eventhandler = function connection() {//creating event handler
    console.log("connection establised");
    emitter.emit("data received");//triggering the corresponding event
}
emitter.on("binding", eventhandler);//binding the event to the handler 
emitter.on("data_received", function(){
    console.log("data transmitted");
});//binding the received data
emitter.emit("binding");//emitting the event
console.log("finished");




