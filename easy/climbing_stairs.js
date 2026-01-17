/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // way of reaching step n = way of reaching (n-1) + way of reaching (n-2)

  if (n <= 2) return n;

  let twoStepsBack = 1; // step 1
  let oneStepBack = 2; // step 2

  for (let i = 3; i <= n; i++) {
    const current = oneStepBack + twoStepsBack;

    twoStepsBack = oneStepBack;
    oneStepBack = current;
  }

  return oneStepBack;
};
