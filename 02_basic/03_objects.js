//there are two ways to decalre objects as a literal and as a constructer
//singleton - jb bhi constructer se object bnate h -to vo singleton object h,apne aap m hi object h. jb susri tarah se bnate h to vo singleton nhi h uske multiple instances h
//Object.create   // by constructer



//object literal

const mySym = Symbol("key1")

//object declaration- using key value pairs
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",  // can not access through dot 
    [mySym]: "mykey1",   // use as a symbol 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]  // can give array value in a object 
}

console.log(JsUser.email)  // jb dot ki tarah dete h tb string ki tarah access krta h
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
 Object.freeze(JsUser)   //freeze object ,value cant change
JsUser.email = "hitesh@microsoft.com"   //cahnges nhi honge due to freeze
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   //name ko reference kr rhe h
}

console.log(JsUser.greeting());   // .greeting - funcn execute nhi hua but reference mil gya
console.log(JsUser.greetingTwo());

