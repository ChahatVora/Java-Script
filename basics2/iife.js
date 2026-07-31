//Immediately Invoked Function Expression
//save from global scope pollution 

(function user(){
    //named iife
    console.log("hi");
})();

((name) => {
    console.log(`hi,${name}`);
})("chahat");