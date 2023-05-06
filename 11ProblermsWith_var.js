// var a=23

// var a=35  //redeclaration

// console.log(a)

// if (a===35){
//     var b=40
//     console.log(b)
// }

// console.log(b)   // we should not getting the value of b outside of the if block.
                // so var varibales are not blocked scoped and for this reason security break sometimes in code

//function scope
// var keywords are fuinction scoped but not blocked scoped

function test(){
    var c=10
    console.log(c)
}

test()

console.log(c)  // this will say that c is not decalred because we can't access the value inside a function using var 