// const promiseOne =  new Promise(function(resolve, reject){
//             setTimeout(function(){
//                 console.log("hi, i am vrchahat");
//                 resolve()
//             },1000)

//         }) 
//         promiseOne.then(function(){
//             console.log("hi, i am het tejani");
            
//         })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("hiiiiii");
//         resolve()
        
//     },1000)
// }).then(function(){
//     console.log("hihihi");
    
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name:"chahat vora",age:20});
//     },1000)
// })
// promiseThree.then((user) => {
//     console.log(user);
    
// })

// const promiseFour = new Promise((resolve, reject) => {
//     let error = true
//     if(!error){
//         console.log("no,error");
//         resolve({
//             name:"chahat vora",
//             age: 20
//         })
//     }else{
//         console.log("error");
//         reject("something went wrong")
//     }
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
    
// })
// .catch((error) => {
//     console.log(error);
    
// })
// .finally(() => console.log("resolved or rejected"))

// const promiseFive = new Promise((resolve, reject) => {
//     let error = true;
//     if(!error){
//         resolve("no,error")
//     }else{
//         reject("error")
//     }
// })
// async function five() {
//     try {
//         const responce = await promiseFive
//         console.log(responce);
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// five()

// async function fetching() {
//     try {
//         const responce = await fetch('https://api.github.com/users/ChahatVora')
//         const responcex = await responce.json()
//         console.log(responcex);
//     } catch (error) {
//         console.log(error);
        
        
//     }
// }
// fetching()

fetch('https://api.github.com/users/ChahatVora')
.then((responce) => {
    return responce.json()
    
})
.then((data) => {
    console.log(data);
    
})
.catch(() => {
    console.log("something went wrong");
    
})