
'use strict';
const user= require('../user');
const events = require('../events.js');
require('../app');
require('../vendor');
require('../driver');
require('../caps');


describe('logger middleware', ()=>{
  let consoleSpy;
  const payload = new user();
  console.log(payload);


  beforeEach(()=>{
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    jest.useFakeTimers();
});
afterEach(()=>{
    consoleSpy.mockRestore();
});

it('pickup', ()=>{
   
    events.emit('pickup', (payload));
    jest.runAllTimers();
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('EVENT LOG', {"event": "need to pickup",payload,time: new Date().toLocaleString()});
  });



  it('New-order ', ()=>{
   
    events.emit('New-order', (payload));
    jest.runAllTimers();
    expect(consoleSpy).toHaveBeenCalled();
   
  });




  it('delivered', ()=>{
   
    events.emit('delivered', (payload));
    jest.runAllTimers();
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('thank you');
  });



  it('in-transit', ()=>{
   
    events.emit('in-transit', (payload));
    jest.runAllTimers();
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('EVENT LOG', {"event": "DRIVER: picked up ",payload,time: new Date().toLocaleString()});
  });




  it('delivered-Drivers', ()=>{
   
    events.emit('delivered-Drivers', (payload));
    jest.runAllTimers();
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('EVENT LOG', {"event": "delivered",payload,time: new Date().toLocaleString()});
  });


  
  
});