
const events = require('./events.js');
require('./vendor');
require('./driver');
require('./caps');
const user=require('./user');


function order(str,obj){

    events.emit('New-order',new user);

}
order();
order();
order();
order();
order();

