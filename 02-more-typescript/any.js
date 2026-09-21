"use strict";
// let val: any = 2;
// console.log(val); // Output: 2
// val = "Hello";
// console.log(val); // Output: "Hello"
// val = new Array();
// // val.push(5);
// val.doesnotexist(33);
// console.log(val); // Output: [5]
let val = 22;
val = "some string";
val = new Array();
if (val instanceof Array) {
    val.push(5);
}
console.log(val); // Output: [5]
