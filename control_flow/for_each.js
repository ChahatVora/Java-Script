arr = ["chahat","het","smit"]
arr.forEach(i => {
    // console.log(i);
});

arr.forEach(function (i) {
    // console.log(i);
})

function print(i){
    console.log(i);
    
}
// arr.forEach(print)

arr.forEach((i,index,arr) => {
    // console.log(i,index,arr);
    
});

const arr1 = [
    {
        name:"chahat",
        age:"20"
    },
    {
        name:"het",
        age:"19"
    },
    {
        name:"smit",
        age:"21"
    }
]
arr1.forEach((i) => {
    console.log(i.age);
    
    
});