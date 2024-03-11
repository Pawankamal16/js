//promise consume and promise creation are two part of promises, promises take callback, inside that resolve and reject two paramater
// then ka direct connection resolve se hota h


//promise creation
const PromiseOne = new Promise(function(resolve, reject){
     //Do an async task
    // DB calls, cryptography, network
     setTimeout(function(){
        console.log('Async task is complete');
        resolve()    //connect .then()
    },1000)
})


//promise consumption
PromiseOne.then(function(){
    console.log('promise consumed');
})



//create promise in one part- these promise may take network request, file handling
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async2 task done');
        resolve()
    },1000)
}).then(function(){
    console.log('async2 consumed');
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "pawan" ,email :"swdd@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "Arnav" ,password :"123345"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})
//promisefour.then().catch() -> then value return krega, catch error dega

promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log('error');
}).finally(( )=> console.log('the promise is either resolve or rejected'))   //finally is default always executed


//promise ko hmesha .then and . catch se hi handle nhi krte h, async se bhi kr skte h->work like DB connection
//async thodi der wait krta h work ho jane ka if complete then hi age bdta h otherwise give error

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "Ramji" ,password :"123345"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promisefive  //promiseFive se jo bhi value aayegi ,vo print kr dega,
        console.log(response);
    } catch (error) {
        console.log('error');
    }
}
consumePromiseFive()
//for error handling use try catch inside async function

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')  // response in string format

//         const data = await response.json()  // taking time of fetching so use await
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()   //return ho gya but dusra then handle krega
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all