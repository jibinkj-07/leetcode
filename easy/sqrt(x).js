/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) return x;

  let left = 1;
  let right = x;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
};

console.log("result", mySqrt(8));
