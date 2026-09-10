const user = {
    _email : "chahat1008@gmail.com",
    _password: "chahat123",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
};
const user1 = Object.create(user)
console.log(user1.email);

