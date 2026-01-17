/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const window = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    const substring = haystack.substring(i, i + window);
    if (substring.includes(needle)) {
      return i;
    }
  }
  return -1;
};

console.log("result is ", strStr("sadkjksad", "sad"));
