//map fn:  Map will loop through every element of the array and will perform specific operations that you provide
//Map method will always return a new array

//-----------------------------------------map()-------------------------------------------------
// square all the array elements

const arr=[1,2,3,4,5]

let squaredElements= arr.map((n)=>{   //here squaredElements is the new array created by map() function 
    return n*n                         // and n is the every element of the array
})

console.log(squaredElements)


//convert all the transaction into dollar

const transaction=[1000,3000,4000,2000,-898,3800,-4500]
const dollar=80

let convertInDollar= transaction.map((amount)=>{
    return (amount/dollar).toFixed(0)     //toFixed(0) is for no digit after point
})

console.log(convertInDollar)

//------------------------------------- forEach()-----------------------------------------------------

// forEach fucntion doesn't return anything, we have to use console.log()
// forEach function also doesn't print any array

let convertInDollar1= transaction.forEach((amount)=>{   // if use forEach, convertInDOllar1 is not an array
    console.log((amount/dollar).toFixed(0))
})

console.log(convertInDollar1)