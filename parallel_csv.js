const csv = require('neat-csv')
const fs = require('fs')
const eachLimit = require('async/eachLimit')
var m_local = {id: null}

process.on('message', function(m) {
  m_local = m
  var files = [...new Set(m.files.map(f => `${m.input}${f}`))] // can use delete method here

  eachLimit(files, 1, process_file, function(err){
    if(err != null){
      console.log(err)
    }
    process.exit()
  });
});

function process_file(file, callback) {
  var stream = fs.createReadStream(file)
  csv(stream).then(data => { //data = csv as object
      process.send({id: m_local.id, file: file, rows: data.length});
      callback()
  });
}
