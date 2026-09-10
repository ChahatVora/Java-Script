// class user {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     name(){
//         return `name is ${this.username}`

//     }
//     mail(){
//         return `email is ${this.email}`
//     }

// }
// const user1 = new user("chahat","chahat1008@gmail.com","123")
// console.log(user1.name())
// console.log(user1.mail());

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password

    user.prototype.name = function(){
        return `name is ${this.username}`
    }

    user.prototype.mail = function(){
        return `mail is ${this.email}`
    }
}
const user1 = new user("chahat_vora","chahat1008@gmail.com","123")
console.log(user1.name())
console.log(user1.mail())
