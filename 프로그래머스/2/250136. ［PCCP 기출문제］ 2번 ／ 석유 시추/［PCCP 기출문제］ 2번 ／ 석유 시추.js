function solution(land) {
    const n = land.length;
    const m = land[0].length;
    
    const dp = Array.from({ length: n }, () => Array(m).fill(0));
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    
    const answer = Array(m).fill(0);
    
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    
    const dfs = (x, y) => {
        const buffers = [[x, y]];
        const stack = [[x, y]];
        
        let size = 1;
        visited[x][y] = true;
        
        while (stack.length) {
            const [cx, cy] = stack.pop();
            
            for (let i = 0; i < 4; i++) {
                const [nx, ny] = [cx + dx[i], cy + dy[i]];
                
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && land[nx][ny] === 1 && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    stack.push([nx, ny]);
                    buffers.push([nx, ny]);
                    size++;
                }
            }
        }
        const hashSet = new Set();
        for (const [bx, by] of buffers) {
            dp[bx][by] = size;
            
            hashSet.add(by);
        }
        
        for (const v of hashSet) {
            answer[v] += size;
        }
    }
    
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (land[i][j] === 0) continue;
            if (dp[i][j] !== 0) continue;
            
            dfs(i, j);
        }
    }
    
    return Math.max(...answer);
}