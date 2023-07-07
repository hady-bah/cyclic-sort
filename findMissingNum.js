const nums = [2,1,5,3]


function findMissingNum(nums){
    
    for(let i = 0; i < nums.length; i++){
        
        //sorting array
        const value = nums[i];
        const correctIndex = nums[i]-1;
        if(value !== nums[correctIndex]){
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];//swap
        }
    }

    //finding missing number
    for(let i = 0; i< nums.length; i++)
        if(nums[i] != i+1){
            return i+1;
        }
}

//checking
console.log(findMissingNum(nums));

module.exports = findMissingNum;