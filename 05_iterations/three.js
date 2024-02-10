// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps
//map is a object contain key value pairs,contains unique value pairs

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);
//for(const key of map) ->print key value pairs in array form
//   console.log(key);

for (const [key, value] of map) {    //map is iterable
     console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


//myobject is not iterable ,gives error
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }