/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  const isAlphaNum = (c) => /[a-z0-9]/i.test(c);

  while (i < j) {
    while (i < j && !isAlphaNum(s[i])) i++;
    while (i < j && !isAlphaNum(s[j])) j--;

    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;

    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome("a a aa"));

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {
//     if (s.length === 0) return false

//     return s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split("").reverse().join("") === s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
// };
