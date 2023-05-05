//for in loops

let colors={
    primary: "red",
    secondary: "black",
    tertiary: "navy blue"
}
for (let color in colors){                   
    console.log(color+ '-->'+ colors[color])   //color is the key and colors[color] is the value
}

let arr=['yellow','green','black']
for (let i in arr){
    console.log(i +"-->"+ arr[i]) // here arry in js is also an object. So here index is the key and elemen
}                                        // is the value