const value = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(value);

//you cannnot change the value of math.pi

const user ={
    name: "chahatvora",
    age: 20,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.defineProperty(user,"name",{
    writable: false
})
user.name = "het_tejani"
console.log(user.name);


console.log(Object.getOwnPropertyDescriptor(user,"name"));




