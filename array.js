//nice
var colors = ['red', 'green', 'blue'];

colors.forEach( color => console.log(color) )

colors.forEach (color =>
  console.log(color)
)

//forEach, map, filter, every (only true if every element returns true) some (same as any?), includes

//need to look up other methods I use.. uniq (convert to set and back?), compact


console.log(colors.join(". "))

var a = [10, 20, 30];
var total = a.reduce(function(first, second) { return first + second; }, 0);
console.log(total) // Prints 60
var total = a.reduce( (first, second) => first + second, 0); // 0 is init value //can also use reduceRight
console.log(total) // Prints 60
