function solution(m, n, puddles) {
    const dp = Array.from({ length: n }, () => Array.from({ length: m }).fill(0));
    
    const directions = [[-1, 0], [0, -1]];
    
    dp[0][0] = 1;
    
    for(const puddle of puddles) {
        const [j, i] = puddle;
        dp[i - 1][j - 1] = 'x';
    }
    
    for(let i = 0; i < dp.length; i++) {
        for(let j = 0; j < dp[i].length; j++) {
            if(i === 0 && j === 0) continue;
            if(dp[i][j] === 'x') continue;
            if(i > 0 && dp[i - 1][j] !== 'x') dp[i][j] = (dp[i][j] + dp[i - 1][j]) % 1000000007;
            if(j > 0 && dp[i][j - 1] !== 'x') dp[i][j] = (dp[i][j] + dp[i][j - 1]) % 1000000007;
        }
    }
    
    return dp[n - 1][m - 1];
}