function getSecondLargest(nums) {
    // Complete the function
    let maxi= Math.max(...nums)
    console.log(maxi)
    let sortedArray=nums.sort()
    console.log(sortedArray)
    for (let i=0; i<nums.length; i++){
        if (nums[i]==maxi){
            return nums[i-1]
            break
           
        }
        
    }
}

// console.log(getSecondLargest([1,2,3,4,5,6,7,8,9,10]))
getSecondLargest([1,2,3,4,5,6,7,8,9,10])