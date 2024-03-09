
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName - function reference
// sayMyName()  // function execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

//function ko jb definition  krte h tb function parameter
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result    // return ke baad kuch bhi print nhi hota h
    return number1 + number2
}


//jb function calll hota h tb arguments
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);



function loginUserMessage(username = "sam"){
    if(!username){                   // username === undefined
       console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))
 console.log(loginUserMessage())   // undefined



 function calculateCartPrice(val1, val2, ...num1){     // rest(spreed) operatpr - bundle al the items and return
    return num1
}

 console.log(calculateCartPrice(200, 400, 500, 2000))


 // how to paas object in function
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}




handleObject(user)

// handleObject({
//     username: "sam",
//     price: 399
// })


// paas array in function
// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
