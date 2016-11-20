// node --use_strict control.js
var x = 5
{
  //inside block
  let x = 6
  console.log(x)//6
}
console.log(x)//5

var bool = false

if (bool) {
  console.log("true")
} else {
  console.log("false")
}

var fruittype = "Apples"

switch (fruittype) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.")
    break
  case "Apples":
    console.log("Apples are $0.32 a pound.")
    break
  case "Bananas":
    console.log("Bananas are $0.48 a pound.")
    throw "BANANA ERROR";
    break
  case "Cherries":
    console.log("Cherries are $3.00 a pound.")
    break
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.")
    break
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.")
    break
  default:
   console.log("Sorry, we are out of " + fruittype + ".")
}

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}

let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}

//ERROR HANDLE
// openMyFile();
// try {
//   writeMyFile(theData); //This may throw a error
// } catch(e) {
//   handleError(e); // If we got a error we handle it
// } finally {
//   closeMyFile(); // always close the resource
// }
