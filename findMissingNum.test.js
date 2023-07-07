const findMissingNum = require('./findMissingNum');

describe("findMissingNum(nums) should return the missing number in the array", () => {
  test("findMissingNum([1, 2, 4, 5]) should return 3", () => { 
    expect(findMissingNum([1, 2, 4, 5])).toBe(3);
  });
});