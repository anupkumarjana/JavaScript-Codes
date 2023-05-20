//CallbackFunction--> its an function that is passed into another function as an argument.
//this function can be invoked at a later stage of time



// function printFirstName(fName,cb){  //here cb is an argument which is called by printLastName function
//     console.log(fName)
//     cb('Jana')   // here we are giving values to the argument
// }

// function printLastName(lName){
//     console.log(lName)
// }

// printFirstName('Anup',printLastName)  // and this is the callback function which is passed inside the printFirstName 



// check whether a number is even or not

const isEven=(n)=>{
    return n%2==0
}

let printResult=(evenFn, num)=>{
    const isNumEven=evenFn(num)

    console.log('The number is ${num} is even number $(isNumEven) ')
}  

printResult(isEven,10)