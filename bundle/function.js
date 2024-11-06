"use strict";
// todo: function
function create() {
    return 2;
}
console.log(create());
// todo: arrow function
const create2 = () => "Hello World!";
console.log(create2());
function add(x, y) {
    const z = x + y;
    console.log("Hasilnya adalah: ", z);
}
add(10, 20);
function add2(a, b) {
    return `${a} ditambahkan ${b} hasilnya: ${a + b}`;
}
const result = add2(20, 30);
console.log(result);
/**
 * todo: catatan untuk running typescript
 *  cara running program dengan perintah
 * tsc && node bundle/function.js
 */ 
