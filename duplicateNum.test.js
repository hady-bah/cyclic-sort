const duplicateNum = require('./duplicateNum');

describe("duplicateNum(nums) finds duplicate number in the array", () => {
  test("duplicateNums([1,3,4,3]) should return 3", () => { 
    expect(duplicateNum([7,3,4,3])).toBe(3);
  });
});