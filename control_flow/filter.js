arr = ["chahat","het","smit"]
const arr1 = arr.forEach(i => {
    return i
    
});
// console.log(arr1);

arr2 = [1,2,3,4,5]
const arr3 = arr2.filter((i) => {
    return i>2
})
// console.log(arr3);

const arr4 = []
arr2.forEach((i) => {
    if(i>2){
        arr4.push(i)
    }
})
// console.log(arr4);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const arr5 = books.filter((bk) => {
    return bk.genre == "Science"
}) 
console.log(arr5);





