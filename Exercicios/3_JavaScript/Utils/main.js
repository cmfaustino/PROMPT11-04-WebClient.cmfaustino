var util = require("./Utils.js");

//util.foreach(console.log, [1,2,3,4]);
//console.log( util.sum([1,2,3]) );
//console.log( util.countZeroes([1,0,0,5,6,0,3]) );

function isEven(v) { return v % 2 == 0; }
var isOdd = util.negate(isEven);

console.log(util.every(isEven, [2, 4]));    // true
console.log(util.some(isOdd, [2, 4]));      // false
