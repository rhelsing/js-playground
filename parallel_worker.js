
process.on('message', function(m) {
  // Do work  (in this case just up-case the string
  m = m.toUpperCase();

  var str = ""

  for (var i = 0, len = m.length; i < len; i++) {
    str += rand(1,100)*i
  }
  // Pass results back to parent process
  process.send(str);
  process.exit() //parent must exit
});

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
