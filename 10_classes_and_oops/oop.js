// const user = {

// }
// literally object, in js called base unit


//object literal - collection of properties and method
//this keyboard tells the current context
const user = {
   username : "pawan",
   loggedIn : true,
   loginCount : 9,

   getUserDetails: function(){
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(this);
}
}
//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);


//new is a constructor function h, ek hi object se multiple constructor bna skte h
//jaise hi this object create krenege, ek new empty {} object create hoga.then constuctor func call hoga due to this new keywords and print arguments
//this,new,classes,inthertihance comes from inheritance