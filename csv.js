const fs = require('fs')
const os = require('os');
const range = require('node-range');
const _ = require('lodash')
var cp = require('child_process');

var children = []
const cpu_factor = os.cpus().length+1
const input = '/Users/ryanhelsing/Desktop/parsle/mv_ben_convert/in/';

console.log(Date.now())
//1. spin up
range(1, cpu_factor).forEach (i => {
  console.log(i)
  children.push(cp.fork('./parallel_csv'))
})

//2. delegate
fs.readdir(input, (err, files) => {
  var csv_files = files.filter(f => f.includes(".csv"))
  var csv_files_partitioned = _.chunk(csv_files, csv_files.length/cpu_factor);
  for (var i = 0; i < children.length; i++){
    var child = children[i]
    child.send({id: i, input: input, files: csv_files_partitioned[i]})
  }
})

//3. wait for response
for (let child of children) {
  child.on('message', function(m) {
    console.log(`Done: {${m.id}, ${m.file}, ${m.rows}}`)
    console.log(Date.now())
  })
}
