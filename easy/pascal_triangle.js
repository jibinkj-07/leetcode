/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];
  for (let row = 0; row < numRows; row++) {
    const colArray = [];
    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        colArray.push(1);
        continue;
      }
      const sum = result[row - 1][col - 1] + result[row - 1][col];
      colArray.push(sum);
    }
    result.push(colArray);
  }
  return result;
};

const result = generate(5);

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
