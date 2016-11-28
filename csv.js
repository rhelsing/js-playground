const fs = require('fs')
const os = require('os');
const range = require('node-range');
const _ = require('lodash')
var cp = require('child_process');

var children = []
//optimal for mass csv processing is 2 processes, 5 threads on my machine, potentially derived by:
const processes = os.cpus().length-2 // number of cores - 2.. what if only has 1 core? or two? need to do case statement
const threads = Math.floor(Math.floor((os.cpus().map( x => { return x.speed })[0]*0.001)*2)) //power of cores factor
const input = '/Users/ryanhelsing/Desktop/parsle/mv_ben_convert/in/';

console.log(Date.now())
//1. spin up
range(0, processes).forEach (i => {
  console.log(i)
  children.push(cp.fork('./parallel_csv_lib'))
})

//2. delegate
fs.readdir(input, (err, files) => {
  var csv_files = files.filter(f => f.includes(".csv"))
  var csv_files_partitioned = _.chunk(csv_files, csv_files.length/processes);
  for (var i = 0; i < children.length; i++){
    var child = children[i]
    child.send({id: i, input: input, files: csv_files_partitioned[i], threads: threads})
  }
})

//3. wait for response
for (let child of children) {
  child.on('message', function(m) {
    console.log(`Done: {${m.id}, ${m.file}, ${m.rows}}`)
    console.log(Date.now())
  })
}


//process, threads, avg_usage, ms
//2, 1, 75, 38050
//3, 1, 94, 38022ms (36323)
//4, 1, 99, 40544ms
//1, 1, 50, 40560ms
//1, 2, 50, 39549ms
//2, 2, 75, 36510ms
//3, 2, 95, 37711ms
//2, 3, 77, 37074ms
//2, 4, 78, 36725ms
//2, 5, 78, 35180ms* (36778) (35025) (53077 w/ cycle through data..) - should handle in lib if possible
//2, 6, 80, 36787ms
//3, 5, 95, 37682ms
