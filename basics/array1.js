let array1 = [1,2,3,4]
let array2 = ['chahat','het','smit']
// console.log(`${array1}${array2}`);

let array3 = new Array(1,2,3,4)
// console.log(array3[2]);

array3.push(3)
// console.log(array3);
array3.pop()
// console.log(array3);

array3.unshift(5)
// console.log(array3);
array3.shift()
// console.log(array3);

// console.log(array3.includes(3));
// console.log(array3.indexOf(2));

//slice,splice

console.log("a",array3);

let slice = array3.slice(1,3)
console.log("slice",slice);
console.log("b",array3);

let splice = array3.splice(1,3)
console.log("splice",splice);
console.log("c",array3);










