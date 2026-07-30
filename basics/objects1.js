let sb = Symbol("chahat")

let object1 = {
    name:"chahat",
    age:20,
    email:"chahat20gmail.com",
    login:true,
    [sb]:"het"
}
// console.log(object1.email);
// console.log(object1[sb]);
// console.log(object1["name"]);

// Object.freeze(object1)
// object1.email = "het69gmail.com"
// console.log(object1.email);

object1.greeting = function(){
    console.log("hi");
    
}
object1.greeting2 = function(){
    console.log("hi 2");
    
}
console.log(object1.greeting());
console.log(object1.greeting2());






