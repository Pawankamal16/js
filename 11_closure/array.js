// There are two types of arrays: holey arrays and continuous arrays. These arrays can contain three types of elements: SMI (Small Integer), Packed Element, and Double.

// 1. **Holey Array**: A holey array is an array that contains missing or empty elements. For example, [1, 2, , 4] is a holey array because it has a missing element. Holey arrays are less optimized for performance.

// 2. **Continuous Array**: A continuous array is an array that does not contain missing or empty elements. For example, [1, 2, 3, 4] is a continuous array because it has no missing elements. Continuous arrays are more optimized for performance.

// In terms of optimization, continuous arrays are more efficient and optimized for various operations compared to holey arrays.



// continiues(packed) and holey array-
//   types-   SMI(small integer)
//         packed elements 
//         double(string,float,function)


const arr = [1,2,3,4,5]
//PACKED_SMI_ELEMENTS - best and optimized type of array
console.log(arr[2])
console.log(arr[9])  // undefined

arr.push(9.0)
//PACKED_double_ELEMENTS

arr.push('9')
//PACKED_ELEMENTS

arr[10] = 11
//HOLEY_ELEMENTS

console.log(arr);
console.log(arr.length);
console.log(arr[19]);  // return undefined


// do these stepsin holey array-

//  bound check
//  hasOwnProperty(arr,9)
//  hasOwnProperty(arr.prototype,10)
//  hasOwnProperty(Object.prototype,10)


//holey are very expensive in js

//optimization -   SMI>DOUBLE>PACKED 
     //            H_SMI>H_DOUBLE>H_PACKED



     const arr2 = new Array(3)
     //just 3 holes,HOLEY_SMI_ELEMENTS

     arr[0] = '1' //HOLEY_ELEMENTS
     arr[1] = '2' //HOLEY_ELEMENTS
     arr[2] = '3' //HOLEY_ELEMENTS

     //optimization
      const arr3 = []
      arr.push('3') // PACKED_ELEMENTS
      arr.push('4') // PACKED_ELEMENTS
      arr.push('5') // PACKED_ELEMENTS


      const arr4 = [1,2,3,4,5,6]
       arr4.push(Infinity)   //PACKED_DOUBLE_ELEMENTS
       arr4.push(NaN)   //PACKED_DOUBLE_ELEMENTS

