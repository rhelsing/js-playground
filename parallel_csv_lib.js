var parse = require('csv-parse');
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

//super slow
function process_file(file, callback) {
  var parser = parse({}, function (err, data) {
    process.send({id: m_local.id, file: file, rows: data.length})
    callback()
  })
  fs.createReadStream(file).pipe(parser);

}
