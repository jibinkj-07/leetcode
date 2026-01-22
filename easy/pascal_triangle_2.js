/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const result = new Array(rowIndex + 1).fill(0);
  result[0] = 1;
  for (let row = 1; row <= rowIndex; row++) {
    for (let j = row; j > 0; j--) {
      result[j] = result[j] + result[j - 1];
    }
  }
  return result;
};

console.log(getRow(3));
