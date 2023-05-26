let arr=[

    {name:"A",age:14, genger:"M"},
    {name:"B",age:52, genger:"M"},
    {name:"C",age:63, genger:"F"},
    {name:"E",age:23, genger:"F"},
    {name:"F",age:50, genger:"F"},
    {name:"G",age:4, genger:"M"}

]

//age of all males

let maleAges= arr.filter(function(obj){
    return obj.genger=="M"
}).map(function(male){
    return male.age
})

console.log(maleAges)

//-----------------------------------

//from the transactions array filter out the deposits and make sum of them
const transactions = [1000,3000,,4000,2000,-898,3800,-4500]

let sumOfDeposits= transactions.filter(function(deposit){
    return deposit>0
}).reduce(function(acc, val){
    let sum= acc+val
    return sum
},0)

console.log(sumOfDeposits)