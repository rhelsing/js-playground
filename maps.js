//like a hash, key, value pairs

var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

// Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.
// Use maps in case if there is a need to store primitive values as keys because object treats each key as a string whether it's a number value, boolean value or any other primitive value.
// Use objects when there is logic that operates on individual elements.

//sets store uniq elements
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
Array.from(mySet);
var mySet2 = new Set([1,2,3,4,4,2]);
console.log(mySet2)

// Checking whether an element exists in an collection using indexOf for arrays is slow.
// Set objects let you delete elements by their value. With an array you would have to splice based on a element's index.
// The value NaN cannot be found with indexOf in array.
// Set objects store unique values, you don't have to keep track of duplicates by yourself.
