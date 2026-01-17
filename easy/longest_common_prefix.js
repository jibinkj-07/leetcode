// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let result = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(result)) {
      result = result.slice(0, -1); // Remove last character
      if (result.length === 0) return "";
    }
  }
  return result;
};

console.log("RESULT", longestCommonPrefix(["flower", "flow", "flight"]));
