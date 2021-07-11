
const events = require('./events.js');
require('./vendor');
require('./driver');

events.on('New-order', (payload) => {
   
    setTimeout(function(){ let x = "3 seconds" }, 3000);
    events.emit('pickup', (payload));
    setTimeout(function(){ let x = "1 seconds" }, 1000);

    events.emit('in-transit', (payload));
    setTimeout(function(){ let x = "3 seconds" }, 3000);

    events.emit('delivered-Drivers', (payload));
    events.emit('delivered', (payload));
    
  });

// events.on('in-transit', (payload) => {
    
//       setTimeout(function(){ let x = "3 seconds" }, 3000);
//       events.emit('delivered-Drivers', (payload));
//       events.emit('delivered', ()=>{console.log('Thank You');});
//     });

 