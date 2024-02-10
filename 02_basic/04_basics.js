// const user= new Object //singleton

const user = {}  // not singleton

user.id = "1231bc"
user.name = "pawan"
user.isLoggedIn = false

console.log(user)


const user2 = {
    email : "aman@gmail.com",
    fullname : {
        userfullname :{
            firstname : "pawan",
            lastname : "kamal"
        }
    }
}
console.log(user2.fullname.userfullname.firstname)



const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj5 = {5:"a", 6 : "b"}

const obj3 = {obj1,obj2}
console.log(obj3)

const obj4 = Object.assign({}, obj1,obj2,obj5)
console.log(obj4)

const obj6 = {...obj1, ...obj2}
console.log(obj6)



const user3 = [
   {
    id : 1,
    email : "sss@gmail.com"
   },

   {
    id : 1,
    email : "sss@gmail.com"
   },
   {
    id : 1,
    email :"sss@gmail.com"
   },
]

console.log(user3[1].id)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('isLoggedIn'))


//object destructure

const course = {
    coursename : "javascript",
    price : "999",
    courseInstructer : "pawan"
}

const{courseInstructer : Instructer} = course
console.log(Instructer)



//json se api call
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]