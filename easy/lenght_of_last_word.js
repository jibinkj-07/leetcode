/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let wordLength = 0;
  const length = s.length - 1;

  for (let i = length; i >= 0; i--) {
    if (s[i] === " " && wordLength > 0) {
      return wordLength;
    }
    if (s[i] !== " ") {
      wordLength++;
    }
  }
  return wordLength;
};

console.log(lengthOfLastWord("a"));
