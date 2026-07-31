function print(){
    console.log("chahat vora");
    
}
// print()
function num(a,b){
    console.log(a+b);
    
}
// num(2,3)

function num1(a,b){
    return a+b
}
let c = num1(5,8)
// console.log(c);

function num2(username="het"){
    if(!username){
        console.log(`pleese provide the username`);
        
    }
    return `the name is ${username}`
}
// console.log(num2());

function num3(value1, value2, ...array){
    return array
}
// console.log(num3(1,2,3,4));

const user = {
    name:"chahat",
    age:20
}

function obj(a){
    return `your name is ${a.name} and age is ${a.ages}`
}
// console.log(obj(user));
// console.log(obj({
//     name:"het",
//     ages:19
// }));

array1 = [1,2,3,4]
function arr1(array){
    return array[1]
}
// console.log(arr1(array1));
console.log(arr1([10,20,30]));









