'use strict';


// eventEmitter is a constructor, so i create a new instance 
// var emitter = new events.EventEmitter();

// emitter.on('customEvent', function(message, status) {
//     // passed message and status asynchonus
//     console.log(`${status}: ${message}`);
// });
// trigger customEvent
// emit(event to trigger, message, status )
// emitter.emit('customEvent', 'Hello World!', 200);
var Person = require('./lib/person')


var ben = new Person('Ben Franklkin');
var george = new Person('George Washington');

george.on('speak', function(said) {
    console.log(`${this.name} -> ${said}`);
})

ben.on('speak', function(said) {

    console.log(`${this.name}: ${said}`);
});

ben.emit('speak', 'You may delay, but time will not.');
george.emit('speak', 'It is for better to be alone, than to be in bad company.');