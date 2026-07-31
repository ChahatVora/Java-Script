const user = {
    name:"chahat",
    detail:function(){
        console.log(`the name is ${this.name}`);
        
    }
}
// user.detail()
// user.name = "het"
// user.detail()

function user1(name1){
    console.log(this.name1);
    
}
// console.log(user1("chahat"));

const user3 = () => {
    let name2 = "chahat"
    console.log(this.name2);
    
}
// user3()

// const user4 = (n1,n2) => {
//     return n1+n1
// }

// const user4 = (n1,n2) => n1+n2
// const user4 = (n1,n2) => (n1+n2)

const user4 = () => ({usernme:"chahat"})
console.log( user4(4,5)); 

