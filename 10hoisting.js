//wer can call function before declaration or after declaration. Function will work fine anywhere we call it.
// but in case of variable if we want to print before the declaration it will tell us that the varibale is UNDEFINED
//this is called as Hoisting 
// console.log(a)

// greet()

let a="hey"

function greet(){
    console.log("Hello, I'm Anup!")
}
console.log(a)

greet()

//function in expression 
// So we can call the fuction anywhere in the code.
//But when we use the fucntion in expression we can't call the expression anywhere
//this phenomenon is called as Hoisting in JS

// add(3,6)

let add= function(a,b){
    console.log(a+b)
}
add(3,6)
