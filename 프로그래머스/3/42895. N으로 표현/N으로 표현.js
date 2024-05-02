function solution(N, number) {
    const dp = [];
    
    if(N === number) return 1;
    for(let i = 1; i <= 8; i++) {
        const NRepeat = Number(N.toString().repeat(i));
        dp[i] = new Set().add(NRepeat);
        for(let j = 1; j < i; j++) {
            for(const x of dp[j]) {
                for(const y of dp[i - j]) {
                    dp[i].add(x + y);
                    dp[i].add(x - y);
                    dp[i].add(x * y);
                    dp[i].add(x / y);
                }
            }
        }
        if(dp[i].has(number)) return i;
    }
    
    return -1;
}