function solution(n, q, ans) {
    let answer = 0;
    
    const dfs = (idx, arr) => {
        if (arr.length === 5) {
            for (let i = 0; i < q.length; i++) {
                const as = q[i].filter(v => arr.includes(v)).length;
                
                if (as !== ans[i]) return;
            }
            
            answer++;
            return;
        }
        
        for (let i = idx; i <= n; i++) {
            dfs(i + 1, [...arr, i]);
        }
        
    }
    
    dfs(1, []);
        
    return answer;
}