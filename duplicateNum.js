const nums = [1,2,2,4,5]

function duplicateNum(nums){

    for(let i = 0; i < nums.length; i++){
        
        //sorting array
        const value = nums[i];
        const correctIndex = nums[i]-1;
        if(value !== nums[correctIndex]){
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];//swap
        }
    }

    //find duplicate if the next number is equal to the previous
    for(let i=0; i<nums.length; i++)
        if(nums[i] === nums[i+1]){
            return nums[i];
        }
}

console.log(duplicateNum(nums))

module.exports= duplicateNum;
