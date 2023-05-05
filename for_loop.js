let arr=[1,2,3,4,5]

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]*arr[i])
// }

let secondArray=[]
for (let i=0; i<arr.length; i++){
    secondArray.push(arr[i]*arr[i])
}
console.log(secondArray)
