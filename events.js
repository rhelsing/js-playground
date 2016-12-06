//need to register arbitrary events to be called in sequence
//callback workflow
function cool(a, b, callback){
  console.log(a, b)
  callback()
}
//standard promise workflow
//async in sequence
//flow through code with async or branch with events/callback dispatch
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('cool', () => {
  console.log('a cool event occurred!');
  myEmitter.emit('fresh');
});

myEmitter.on('event', () => {
  console.log('an event occurred!');
  myEmitter.emit('cool');
  myEmitter.emit('cool');
  myEmitter.emit('fresh', "override");
});

myEmitter.on('fresh', (input="nothing") => {
  console.log(`a fresh event occurred! ${input}`);
});


myEmitter.emit('event');
