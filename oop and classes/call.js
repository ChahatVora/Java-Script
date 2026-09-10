function user(username){
    this.username = username;
    console.log("called");
}

function newuser(username,userage){
    user.call(this,username)
    this.userage = userage;

}

const user1 = new newuser("Chahat Vora",20)
console.log(user1);
