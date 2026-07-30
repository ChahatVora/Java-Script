let date1 = new Date()
// console.log(date1.toDateString());
// console.log(date1.toLocaleDateString());
// console.log(date1.toString());
// console.log(typeof date1);

// let mydate = new Date(2026,6,30)
// let mydate = new Date(2026,6,30,10,49)
// let mydate = new Date("2026-07-30")
let mydate = new Date("07-30-2026")
// console.log(mydate.toLocaleString());

let currentDate = Date.now()
// console.log(currentDate);
// console.log(mydate.getTime());
// console.log(Math.floor(Date.now()/1000));

let date2 = new Date()
console.log(date2);
console.log(date2.getMonth());
console.log(date2.getDay());

date2.toLocaleString('default',{
    weekday:"long   "
})










