//global scope ke pollution (variables) ko htane ke liye IIFE ka use krte h
// Immediately Invoked Function Expressions (IIFE)


// name diife func m hota h
(function chai(){
    console.log(`DB CONNECTED`);
})();    // js m function immediatly invoked ho gya h but actually pta nhi h rokna kha h uske liye ; use krte h 

//()()  first one for func definition and second one for func execution


// unnamesd iife in arrow func m hota h
( (name) => {
    console.log(`DB CONNECTED2  ${name}`);
})('pawan');