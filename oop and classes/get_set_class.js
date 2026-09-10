class user{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

}
const user1 = new user("chahat1008@gmail.com","chahat@123");
console.log(user1.password);
