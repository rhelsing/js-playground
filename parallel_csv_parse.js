var csv = require('csv-parser')
const fs = require('fs')
const eachLimit = require('async/eachLimit')
var m_local = {id: null}

process.on('message', function(m) {
  m_local = m
  var files = m.files.map(f => `${m.input}${f}`)

  eachLimit(files, m.threads, process_file, function(err){
    if(err != null){
      console.log(err)
    }
    process.exit()
  });
});

//slower w/ on data transform, better to transform at read time, pass options to csv() function
function process_file(file, callback) {
  var rows = []
  fs.createReadStream(file)
  .pipe(csv())
  .on('data', function (data) {
    rows.push(data)
  })
  .on('end', function () {
    process.send({id: m_local.id, file: file, rows: rows.length})
    callback()
  })
}
