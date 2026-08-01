arr = [1,2,3,4,5]

const arr1 = arr.map((i) => {
    return i*10
})
// console.log(arr1);

const arr2 = arr
.map((i) => i*10)
.map((i) => i+1)
.filter((i) => i>50)
// console.log(arr2);

