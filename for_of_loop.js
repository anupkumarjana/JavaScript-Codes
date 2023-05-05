//for of loop

let arr=['red','yellow','white']
for (let color of arr){
    console.log(color)
}

// to get the index from for of loop we will use entries() method
for (let [index, color] of arr.entries()){
    console.log(index+ "-->"+color)
}
let b=02
console.log(b)