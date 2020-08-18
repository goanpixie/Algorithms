function fib(n) {
  let dp = new Array(n + 1);

  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = fib(i - 1) + fib(i - 2);
  }
  console.log(dp);
  return dp[n];
}

console.log(fib(11));
