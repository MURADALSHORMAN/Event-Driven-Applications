const events = require('./events.js');

events.on('in-transit', (payload) => logIt('DRIVER: picked up ', payload));
events.on('delivered-Drivers', (payload) => logIt('delivered', payload));

function logIt(event, payload) {
  console.log('EVENT LOG', { event, payload, time: new Date().toLocaleString() });
}