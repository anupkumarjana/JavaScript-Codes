//impure functions

var a=4

function add(x){
    console.log(x+a)
    a++
}

add(4)
add(4)
add(4)

//for the external factor 'a', the output is changing. that's why its an IMPURE FUNCTION
// console.log() is also an external factor and that also makes the function impure