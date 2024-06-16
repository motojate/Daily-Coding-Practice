function solution(x, y, n) {
    const dp = Array.from({ length: y + 1 }).fill(-1);
    dp[x] = 0;
    
    for(let i = x; i <= y; i++) {
        if(dp[i] === -1) continue;
        
        dp[i + n] = dp[i + n] === -1 ? dp[i] + 1 : Math.min(dp[i + n], dp[i] + 1);
        dp[i * 2] = dp[i * 2] === -1 ? dp[i] + 1 : Math.min(dp[i * 2], dp[i] + 1);
        dp[i * 3] = dp[i * 3] === -1 ? dp[i] + 1 : Math.min(dp[i * 3], dp[i] + 1);
    }
    
    return dp[y];
}