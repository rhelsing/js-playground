//node --use_strict functions.js

function square(number) {
  return number * number;
}

console.log(square(20))


//IMPORTANT:
function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota" (the make property was changed by the function)

var square = function(number) { return number * number };
var x = square(4) // x gets the value 16

var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n-1) };
console.log(factorial(3));

//COOL: naive map/reduce implementation
function map(f,a) {
  var result = [] // Create a new Array
  for (let i in a){ result[i] = f(a[i]) }
  return result;
}

function reduce(f,a) {
  var result = a[0] //init w/ first item
  //call function on items
  for (let i in a){
    if (i === 0){
      continue;
    }
    result = f(result, a[i])
  }
  return result;
}


var cube = function(x) {return x * x * x}
var add = function(x,y) {return x + y}
var arr = [0, 1, 2, 5, 10]

console.log(reduce(add, map(cube, arr)))


//get all arguments passed.. pass more.. wierd
function myConcat(separator) {
   var result = ""; // initialize list
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"))

var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium"
];

//same things
var a2 = a.map(function(s){ return s.length })
var a3 = a.map( s => s.length )

console.log(a3)

eval("1+1")//like ruby

//default params:
function multiply(a, b = 1) {
  return a*b;
}

multiply(5); // 5

//the rest params.. crazy
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
