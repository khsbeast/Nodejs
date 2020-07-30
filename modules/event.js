const Emitter = require('events');

const event = new Emitter();

event.on('logging',(arg) => (
    console.log('Got it', arg)
))

event.emit('logging',{id : 1,name : 'kumar'})