/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const seen = new Set();

  while (n !== 1) {
    if (seen.has(n)) return false; // cycle detected
    seen.add(n);
    n = getNext(n);
  }

  return true;
};

function getNext(num) {
  let sum = 0;

  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }

  return sum;
}
