arr = [1,2,3,4,5]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const arr1 = arr.reduce((acc,i) => acc+i,0)
// console.log(arr1);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const arr2 = shoppingCart.reduce((acc,i) => acc+i.price,0)
console.log(arr2);


