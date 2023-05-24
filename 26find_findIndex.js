//find() method --> find() returns the first element of an array that stisfies the condition

const transactions = [1000,3000,,4000,2000,-898,3800,-4500]

let findFirstWithdrawl = transactions.find(function(n){
    return n<0
})

console.log("First withdrawl is= "+findFirstWithdrawl)

//findIndex()--> this method return the index of the first element of an array that satisfies the condition

let findFirstWithdrawlIndex = transactions.findIndex(function(n){
    return n<0
})

console.log("First wilthdrawl index is= "+ findFirstWithdrawlIndex)
