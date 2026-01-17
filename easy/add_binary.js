/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    const bitA = i >= 0 ? a[i] - "0" : 0; // Converting into number by force - operation
    const bitB = j >= 0 ? b[j] - "0" : 0; // Equivalent to Number(a[i])

    const sum = bitA + bitB + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result;
};

console.log("Result is ", addBinary("1010", "1011"));
