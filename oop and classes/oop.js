const user1 = {
    name:"chahat vora",
    age: 20,
    signedIn: true,
    getUser: function(){
        console.log(`username:${this.name}`);
        // console.log(this);
        

    }
}
// console.log(user1.name);
// console.log(user1.getUser());
// console.log(this);

function user2(username, isloggedIn, loginCount){
    this.username = username;
    this.isloggedIn = isloggedIn;
    this.loginCount = loginCount;

    this.greeting = function(){
        console.log(`vr chahat`);
        
    }

    return this
    
}
const userOne = new user2("chahat vora",true,20)
const userTwo = new user2("het tejani",false,21)
console.log(userOne.constructor);
console.log(userTwo);





