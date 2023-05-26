// reduce method-->  it returns only single value

// make sum of the array

let num =[1,2,3,4,10]

let result= num.reduce(function(acc, value){
    let sum= acc+value
    return sum
},0)    //here e are initializing acc 's value

console.log(result)


//------------------------------------------

//make product of the same array
// let num1 =[1,2,3,4,10]
let product =num.reduce(function(acc, value){
    let mul = acc*value
    return mul
},1)

console.log(product)

