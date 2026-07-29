// types of datatypes
//primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

let a = 3
let b = 4.2

let c = true
let d = false
let e;

const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1===id2);

const bigNumber = 111111111111n

// Non primitive
// Array, Objects, Functions

let array = ["chahat", "het"]
let object = {
    "name":"chahat",
    "age":20
}
let afunction = function(){
    console.log("hello world");
    
}
afunction()

