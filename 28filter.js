//filter() method --> Filter return a new array, it will return all those elements that matches the spacific condition
//if the condition is true it will retunr the element for that condition ansd if its false it'll discard the elements

let num = [1,2,3,4,10]

let evenNum= num.filter(function(n){
    return n%2==0      // it'll only check if its even or not and push them to new array 
})

// ------------------------------------------------

// find out all the deposits(+ve elements)

const transactions = [1000,3000,,4000,2000,-898,3800,-4500]

let allDeposits = transactions.filter(function(deposits){
    return deposits>0
})

console.log(allDeposits)
