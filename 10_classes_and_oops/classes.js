class user{

    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
        }

     encryptPassword(){
            return `${this.password}abc`
        }

     changeUsername(){
            return `${this.username.toUpperCase()}`
        }
    
}

const val = new user("pawan","example@gmail.com","123")
console.log(val.encryptPassword());
console.log(val.changeUsername());


//behind the scene


function User(username,email,password){
       this.username = username
        this.email = email
        this.password = password
}

User.prototype.encryptPassword = function(){      //properties ko inject kr rhe h
    return `${this.password}abc`

}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`

}

const vam = new User("Ram","gamil@gmail.com","1789")
console.log(vam.encryptPassword());
console.log(vam.changeUsername());
