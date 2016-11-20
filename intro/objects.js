var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
myCar.dents = [[4.3,21.11],[11,220.1298]];

console.log(myCar)
console.log(myCar.model)
console.log(myCar["dents"][1][1])
console.log(myCar.dents[0])
console.log(myCar.color)

console.log(Object.keys(myCar))

var obj = { property_1: "cool",   // property_# may be an identifier...
  2: "hey",   // or a number...
  "property n": "dude" }; // or a string

var myHonda = {color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}};

//Constructor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car("Eagle", "Talon TSi", 1993);

//both types of calls
var myObj = {
  myMethod: params => {
    console.log(params)
  },
  another: function(yo){
    console.log("dude")
  }
};

myObj.myMethod("hey")
myObj.another()

