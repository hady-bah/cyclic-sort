const smallestMissingP = require('./smallestMissingP');

describe("smallestMissingP(nums) should return the smallest positive missing number in the array", () => {
  test("smallestMissingP([7,8,9,11,12]) should return 1", () => { 
    expect(smallestMissingP([7,8,9,11,12])).toBe(1);
  });
});