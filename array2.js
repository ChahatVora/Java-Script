const a = ["ironman","spiderman","captain america"]
const b = ["superman","batman","wonderwomen"]
// a.push(b)
c = a.concat(b)
// console.log(c);

d = [...a,...b]
// console.log(d);

e = [1,2,3,[2,3,4],3,4,[4,5,[6,7,[8]]]]
e = e.flat(Infinity)
// console.log(e);

console.log(Array.isArray("chahat"));
console.log(Array.from("chahat"));
console.log(Array.from({
    name:"chahat"
}));

let s1 = 20
let s2 = 40
let s3 = 50
console.log(Array.of(s1,s2,s3));







