// functional sort
Object.defineProperty(Array.prototype, 'uniq', {
    enumerable: false,
    value: function() { return [...new Set(this)] }
});


console.log([1,2,3,3,3,2,4].uniq())

Array.prototype.myUcase = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();

console.log(fruits)
