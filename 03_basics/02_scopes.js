//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}



console.log(a);
// console.log(b);
//console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //give error not in scope

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);   // error - not in scope
}

// console.log(username);  // error - not in scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

// function declaration
function addone(num){
    return num + 1
}



//addTwo(5) // gives error
// variable ke andr hold kr liya h function ko
const addTwo = function(num){
    return num + 2   // function expression
}