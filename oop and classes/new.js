function add(x, y) {
  return x + y;
}
add.add1 = 1;
// console.log(add(2,3));
// console.log(add);
// console.log(add.add1);
// console.log(add.prototype);



function user(userName, userAge) {
  this.userName = userName;
  this.userAge = userAge;
}
user.prototype.add = function () {
  this.userAge++;
  console.log(this.userAge);
};
user.prototype.printAdd = function () {
  console.log(this.userAge);
};
const user1 = new user("Chahat Vora", 20);
const user2 = new user("Het Tejani", 21);

user2.printAdd();
user1.add();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
