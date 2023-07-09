const twoSum = require('./twoSum');

describe("twoSum(nums, target) should return an array of the indices for the elements that add to the target", () => {
  test("twoSum([2,3,4], 6) should return [1,3]", () => { 
    expect(twoSum([2,3,4], 6)).toEqual([1,3]);
  });
});