// destructuring objects


let myObject ={
    name : "Anup",
    age: 25,
    gender : "male",

    address:{
        village: "barsuklalchak",
        po : "Hadia",
        state: "Purba Medinipur"
    }
}

let {name:n, age:a, gender:g, address:{state: s}}= myObject


console.log(n)
console.log(a)
console.log(g)
console.log(s)

