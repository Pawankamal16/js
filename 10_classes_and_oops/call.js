function setUsername(username){
    //complex database calls
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.email = email;
    this.password = password
}

const val = new createUser("pawan","example@gmail.com","123")
console.log(val);


//this window object ko  reference krta h,in node js points to the empty object
//call func- refernce ko hold rkhta h