const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // loop until the pointers meet or cross each other
    while (left < right) {
        // calculate the sum of the numbers at the current index
        const currentSum = nums[left] + nums[right];

        // check if the current sum is equal to the target
        if (currentSum === target) {
            // return the indices of the two numbers, add 1 because the original index starts from 0
            return [left + 1, right + 1];
        } else if (currentSum > target) {
            //if the current sum is greater than the target, decrement the right pointer
            right--;
        } else {
            //if the current sum is smaller than the target, increment the left pointer
            left++;
        }
    }

    // Return an empty array if no numbers add to target
    return [];
}


console.log(twoSum(nums, target));

module.exports = twoSum;
