/*
A good rule of thumb is one to two node processes per core, perhaps more for machines with a good
ram clock/cpu clock ratio, or for node processes heavy on I/O and light on CPU work, to minimize the
down time the event loop is waiting for new events.
*/

//number of cores:
// os.cpus().length

//speed:
//os.cpus().map( x => { return x.speed })[0]*0.001 //2.66 - i7 mbpro

//load_avg: (should be less than os.cpus().length)
// os.loadavg() //[1min, 5min, 15min]

//GB mem free
// os.freemem()*0.000000001

const os = require('os');
const range = require('node-range');
var pry = require('pryjs').it
var cp = require('child_process');
var children = []
// var child = cp.fork('./parallel_worker'); //can do two per core
//child.pid

range(1, os.cpus().length*5).forEach (i => { //can run 20 processes relatively easily on mpb
  console.log(i)
  children.push(cp.fork('./parallel_worker'))
})


for (let child of children) {
  child.on('message', function(m) {
    console.log('received: ' + m)
  })
}

for (let child of children)  {
  child.send('02211219532443560693680855350869624637938129013441530306176714019111980966160')
}


