/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let i = 0;
  const n = s.length;

  // 1. Skip leading whitespace
  while (i < n && s[i] === " ") i++;

  // 2. Handle sign
  let sign = 1;
  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  // 3. Convert digits
  let result = 0;
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  while (i < n && s[i] >= "0" && s[i] <= "9") {
    const digit = s[i].charCodeAt(0) - 48;

    // 4. Overflow check BEFORE adding digit
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > 7)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = result * 10 + digit;
    i++;
  }

  return result * sign;
};
