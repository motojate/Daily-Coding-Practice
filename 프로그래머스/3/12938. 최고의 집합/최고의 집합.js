function solution(n, s) {
    if(s < n) return [-1];
    const median = Math.floor(s / n);
    const answer = Array.from({ length: n }).fill(median);
    
    for(let i = 1; i <= s % n; i++) answer[n - i]++;
    
    return answer;
}