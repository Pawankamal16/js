// array
// js array are resizable , are not associative means array elements can not be accessed using arbitrary strings as indexes
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)  // push in last
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  //push 9 in starting
// myArr.shift()   // pop 9 from starting

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);  // output in arrays format
// console.log( newArr);


// slice- range include nhi krega, splice- range include krega

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)    

console.log(myn1);   //[1,2]
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)   
console.log("C ", myArr);  //remove splice part from array  [0, 4, 5]
console.log(myn2);   // [1,2,3]