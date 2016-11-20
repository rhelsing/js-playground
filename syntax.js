//run with: node --use_strict syntax.js
var pry = require('pryjs').it

var cool = "cool" //regular var
var a = undefined //different from: acts as NaN
var b = null //acts as 0

if (true) {
  let x = 5
}
// console.log(x);  // x is not 5 because let, with var, it would be

+"1.1" + +"1.1" // + unary op convert string to num

var car = { manyCars: {a: "Saab", "b": "Jeep"}, 7: "Mazda" }

console.log(car.manyCars.b) // Jeep
console.log(car[7]) // Mazda

var unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!"
}

console.log(unusualPropertyNames[""])  // An empty string
console.log(unusualPropertyNames["!"]) // Bang!

console.log(`hey dude ${car.manyCars.a}`)


eval(pry)
