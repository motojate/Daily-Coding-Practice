function solution(money) {
    const len = money.length;
    
    if(len <= 3) return Math.max(...money);
    
    const firstSteal = () => {
        const dp = Array.from({ length: len }).fill(0);
        dp[0] = money[0];
        dp[1] = money[0];
        for(let i = 2; i < len - 1; i++) dp[i] = Math.max(dp[i - 1], dp[i - 2] + money[i]);
        
        return dp[len - 2];
    }
    
    const lastSteal = () => {
        const dp = Array.from({ length: len }).fill(0);
        dp[1] = money[1];
        for(let i = 2; i < len; i++) dp[i] = Math.max(dp[i - 1], dp[i - 2] + money[i]);
        
        return dp[len - 1];
    }
    
    return Math.max(firstSteal(), lastSteal());
}