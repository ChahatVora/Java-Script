//stack memory (for primitive datatypes)
// it gives the copy so does not changed
let var1 = "virat"
let var2 = var1
var2 = "dhoni"
// console.log(var1);
// console.log(var2);

//heap memory (for non-primitive datatypes)
// it gives the direct reference so it is changed

let object1 = {
    "name":"chahat",
    "age":20
}
let object2 = object1
object2.name = "het"

console.log(object1);
console.log(object2);


