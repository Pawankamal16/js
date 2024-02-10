//scope m jitne variables hote h unko access krne ke liye this ka use hota h - current context
const user = {
    username : "pawan",
    price : 999,

    welcomeMessage : function(){
        console.log(` ${this.username} , welcome to website`)
        //console.log(this);
    }
}

user.welcomeMessage()
user.username = "ram"
user.welcomeMessage()
 //console.log(this); - node environment ke andar h, return empty object 
 //browser ke andar global object is window object


 function func(){      // const func = function(){}
    let username = "pawan"
    console.log(this.username)  // function ke andar this keyword kamm nhi krega, only inside object
    console.log(this) // gives more values
 }
 func()


 const funct = () =>{     // function htakr arrow lga denge
    let username = "pawan" 
    console.log(this.username)   //undefined
    console.log(this)  // arrow func m this use nhi kr skte but regular fun m kr skte h  , gives {} empty object
 }
 funct()


 //arrow funct
//  const add = (num1, num2) => {
//     return num1 + num2
// }

// const add = (num1, num2) =>  num1 + num2

// const add = (num1, num2) => ( num1 + num2 )

const add = (num1, num2) => ({username: "hitesh"})  //object return ke krne ke liye paranthesis m wrap krna pdega


console.log(add(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()