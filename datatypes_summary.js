//primitive  - these are call by values, jo bhi data copy krna hota h, unka copy m change hota h, data ke memory ka reference nhi diya jata h

//7 - types - string, number, boolean, null, undefined,symbol,BigInt

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id === anotherId)

// Non - primitive (reference type) 
 // array, objects and functions

 let arr = [ "pawan" , "kamal", "arnav"]

  let obj = {
    name : "pawan",
    age : 22
  }

  let func = function(){
    console.log("hello world")
  }


  // stack memeory (primitive) - stack mempry define hogi to ek new copy variable milega
  // heap memory (non - primitive) - heap memory declare hui to original value ka reference milta , original value ko change kr skte h
