const csv = require('neat-csv')
const fs = require('fs')
const eachLimit = require('async/eachLimit')
var m_local = {id: null}

process.on('message', function(m) {
  m_local = m
  var files = [...new Set(m.files.map(f => `${m.input}${f}`))] // can use delete method here

  eachLimit(files, m.threads, process_file, function(err){
    if(err != null){
      console.log(err)
    }
    process.exit()
  });
});

function process_file(file, callback) {
  var stream = fs.createReadStream(file)
  //be able to pass complex options into csv for mapping, transformation, reduce etc in one pass
  csv(stream).then(data => { //data = csv as object
      process.send({id: m_local.id, file: file, rows: data.length});
      callback()
  });
}
