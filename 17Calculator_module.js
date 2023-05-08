function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}

function mul(a,b){
    console.log(a*b)
}

function div(a,b){
    console.log(a/b)
}


// the way how we create an object as a module and export to other JS files

module.exports={
    addition: add,
    substraction: sub,
    multiplication: mul,
    division: div
}

