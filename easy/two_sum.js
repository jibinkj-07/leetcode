/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const itemMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    // Calculated compliment
    const comp = target - nums[i];
    if (itemMap.has(comp)) {
      return [i, itemMap.get(comp)];
    }
    itemMap.set(nums[i], i);
  }
};

console.log("RESULT", twoSum([3, 2, 4], 6));
