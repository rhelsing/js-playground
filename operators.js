//node --use_strict operators.js

var age = 13
var status = (age >= 18) ? "adult" : "minor" //ternary
console.log(status)

//dont need ugly curlies :)
for (var i = 0, j = 9; i <= j; i++, j--)
  console.log("a[" + i + "][" + j + "]")

if (status == "adult")
  console.log("hey")
else
  console.log("bye")
