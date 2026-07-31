// const a = 1
// let b = 2
// var c = 3

if(true){
    var a = 10
    let b = 20
    const c = 30
}

// console.log(a);

// console.log(a,b,c);

function arr(){
    const a1 = "chahat"
    
    function brr(){
        const b1 = "het"
        console.log(a1);
    }
    brr()
    // console.log(b1);
}
// arr()

if(true){
    const user1 = "chahat"
    if (user1 == "chahat"){
        const user2 = "het"
        console.log(user1 + user2);
        
    }
    // console.log(user2);
    
}
// console.log(user1);


console.log(addone(8));
function addone(one){
    return one+1
}

// console.log(addtwo(8));
const addtwo = function(){
    return two+2
}




