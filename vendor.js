const events = require('./events.js');
events.on('New-order', (payload) => logout('New order', payload));
events.on('pickup', (payload) => logout('need to pickup', payload));
events.on('delivered', (payload) => msg('delivered', payload));

function logout(event, payload) {
  console.log('EVENT LOG', { event, payload, time: new Date().toLocaleString() });
//   console.log('EVENT LOG');
}

function msg(event , payload) {
    console.log('EVENT LOG', console.log('thank you'));
  }