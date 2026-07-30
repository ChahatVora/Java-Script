const user1 = {
    name1:"chahat",
    age1:20,
    college1:"scet"
}

const user2 = {
    name2:"het",
    age2:21,
    college2:"scet"
}

// console.log(user1,user2);
const user3 = {...user1, ...user2}
// console.log(user3);

const user4 = {
    name:{
        firstname:"smit",
        lastname:"suthar"
    },
    age:19
}
// console.log(user4.name.firstname);

const user5 = [
    {
        name1:"chahat",
        age1:20
    },
    {
        name2:"het"
    }
]
// console.log(user5[0].name1);
// console.log(Object.keys(user1));
// console.log(Object.values(user1));
// console.log(Object.entries(user1));
// console.log(user1.hasOwnProperty('name1'));

const user6 = {
    name:"zeel",
    age:21,
    college:"sarvajainik university"
}
const {college:clg} = user6

console.log(clg);





