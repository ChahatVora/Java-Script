class user{
    constructor(username){
        this.username = username
    }
    login(){
        return `${this.username} is logged in`
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    detail(){
        return `name:- ${this.username} email:- ${this.email}`
    }
}
const user1 = new teacher("chahat vora","chahat1008@gmail.com","123")
console.log(user1.login())
const user2 = new user("het tejani")
console.log(user2.login());

console.log(user1 instanceof user);

