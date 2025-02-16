const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit('event', 'a', 'b');

let m = 0;
myEmitter.once('test', () => {
  console.log(++m);
});
myEmitter.emit('test');
// Prints: 1
myEmitter.emit('test');

//error handling

myEmitter.on('error', (err) => {
    console.error(err);
    console.error('whoops! there was an error');
  });
  myEmitter.emit('error', new Error('whoops!'));
  // Prints: whoops! there was an error

