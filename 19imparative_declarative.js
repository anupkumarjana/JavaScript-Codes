// we will be given a number and we have to check that if the number is even or not 

// imparative way of coding 
const a=5
const squared= a*a
let isEven;

if (squared%2==0){
    isEven=true
}
else{
    isEven=false
}

console.log(isEven)

// declarative way of coding 

const checkEvenSquare = (x)=> (x*x %2 ===0 ? true : false)   // '?' is called the trinary operator 

console.log(checkEvenSquare(10))


