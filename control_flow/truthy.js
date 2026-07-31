const user = [];

if (user) {
  console.log("it us truthy value");
} else {
  console.log("it is falsy value");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}

if (user.length === 0) {
  console.log("user array lenth is zero");
}

const user_object = {};
if (Object.keys(user_object).length === 0) {
  console.log("user object array lenth is zero");
}

// Nullish Coalescing Operator (??): null undefined

let a = 10 ?? null
let b = undefined ?? 3 ?? 100
console.log(a,b);

//ternary operator

const value = 1000

value > 500 ? console.log("value greater than 500") : console.log("value less than 500");




