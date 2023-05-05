let arr=[1,2,5,6]
console.log("The array is: ",arr)

console.log("Length of the array is: ",arr.length)

//methods
//pop --> deletes the last element
let p =arr.pop()
console.log("Popped value is: ", p)
console.log("Popped array: ",arr)

//push --> append the value in the end
arr.push(50)
console.log("Pushed array: ", arr)

//shift --> deletes the element from the start
let s=arr.shift()
console.log("Shifted value is: ", s)
console.log("Shifted array is: ",arr)

//unshift --> append the value at start
arr.unshift(23)
console.log("Unshifted array is: ",arr)


