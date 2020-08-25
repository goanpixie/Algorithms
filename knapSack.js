let solveKnapsack = function(profits, weights, capacity) {
  const n = profits.length;
  if (capacity <= 0 || n == 0 || weights.length != n) return 0;

  const dp = Array(capacity + 1).fill(0);

  // if we have only one weight, we will take it if it is not more than the capacity
  for (let c = 0; c <= capacity; c++) {
    if (weights[0] <= c) dp[c] = profits[0];
  }

  // process all sub-arrays for all the capacities
  for (let i = 1; i < n; i++) {
    for (let c = capacity; c >= 0; c--) {
      let profit1 = 0,
        profit2 = 0;
      // include the item, if it is not more than the capacity
      if (weights[i] <= c) profit1 = profits[i] + dp[c - weights[i]];
      console.log("profit1", profit1,profits[i],dp[c - weights[i]])
      // exclude the item
      profit2 = dp[c];
      console.log("i=>",i,"c=>",c, profit1, profit2)
      // take maximum
      dp[c] = Math.max(profit1, profit2);
    }
  }

  // maximum profit will be at the bottom-right corner.
  return dp[capacity];
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);