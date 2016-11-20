var Polygon = require('./polygon.js')
var p1 = new Polygon(102,323);
p(p1.area)

p(Polygon.lib_call(3,4))

function greetMe(yourName) {
  p("Hello " + yourName)
}

function p(item) {
  console.log(item)
}

greetMe("World")
