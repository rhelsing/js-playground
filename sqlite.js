var fs = require("fs");
var path = require("path");
var file = path.join(__dirname, "db/test.db");
var exists = fs.existsSync(file);

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);
// var db = new sqlite3.Database(':memory:');

db.serialize(function() {
  if(!exists) {
    db.run("CREATE TABLE Stuff (thing TEXT)");
  }

  var stmt = db.prepare("INSERT INTO Stuff VALUES (?)");

   var rnd;
  for (var i = 0; i < 10; i++) {
    rnd = Math.floor(Math.random() * 10000000);
    stmt.run("Thing #" + rnd);
  }

  stmt.finalize();

  db.each("SELECT rowid AS id, thing FROM Stuff", function(err, row) {
    console.log(row.id + ": " + row.thing);
  });
});

db.close();
