const nums = [7,8,9,11,12]

function smallestMissingP(nums){

    for(let i = 0; i < nums.length; i++){
        
        //sorting array
        const value = nums[i];
        const correctIndex = nums[i]-1;
        if(value !== nums[correctIndex]){
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];//swap
        }
    }

    const missingNums = [];// creating empty array for missing numbers 

    //finding missing numbers and pushing into array of missing nums
    for(let i = 0; i< nums.length; i++){
        if(nums[i] != i+1){
            missingNums.push(i+1);//push missing number into missing numbers array
        }
    }

    //already sorted, so finding first number that's bigger than 0 which will be the smallest positive int
    for(let i=0; i<missingNums.length; i++){
        if(missingNums[i] > 0){
            return missingNums[i];
        }
    }
}


console.log(smallestMissingP(nums))

module.exports = smallestMissingP;