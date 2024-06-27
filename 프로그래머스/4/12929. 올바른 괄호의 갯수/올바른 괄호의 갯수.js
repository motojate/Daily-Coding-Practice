function solution(n) {
    const dp = Array.from({ length: n + 1 }).fill(0);
    
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        for(let j = 1; j <= i; j++) dp[i] += dp[i - j] * dp[j - 1];
    }
    return dp[n];
}