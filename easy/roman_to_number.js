/**
 * @param {string} s
 * @return {number}
 */

const ROMAN_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = ROMAN_VALUES[s[i]];
    const next = ROMAN_VALUES[s[i + 1]];

    if (next > current) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};

console.log(romanToInt("V"));
