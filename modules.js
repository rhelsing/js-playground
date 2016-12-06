var weekDay = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];
  return {
    name: function(number) { return names[number]; },
    number: function(name) { return names.indexOf(name); }
  };
}();
module.exports = weekDay

function MyClass() {
    var self = this;
    this.myMethod = function() {
        console.log(self);
    };
}

var myClass = new MyClass();
myClass.myMethod(); // self resolves as the instance of MyClass

var someFunction = myClass.myMethod;
someFunction(); // self also resolves as the instance of MyClass

//constructor.. should use this type?
function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);

//obj as class, sensible defaults
var protoRabbit = {
  speak: function(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
  }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
