// some() method --> it'll return trur even if 1 element satisfies the condition 

const transactions = [1000,3000,,4000,2000,-898,3800,-4500]

let resultSome = transactions.some(function(n){
    return n<0
})

console.log(resultSome)   // this will return true beacuse -898 is less than 0


// every() method --> it'll return true only if every element staisfies the condition

let returnEvery = transactions.every(function(n){
    return n>0
})


console.log(returnEvery)  // this will return false becuse -898 is the only element which is neagtive