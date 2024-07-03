function solution(n, edge) {
    const visited = Array.from({ length: n + 1 }).fill(false);
    const level = Array.from({ length: n + 1 }).fill(0);
    const adjList = Array.from({ length: n + 1 }, () => []);
    
    for(const [u, v] of edge) {
        adjList[u].push(v);
        adjList[v].push(u);
    }
    
    const queue = [1];
    visited[1] = true;
    
    while(queue.length > 0) {
        const size = queue.length;
        
        for(let i = 0; i < size; i++) {
            const head = queue.shift();
            const lev = level[head] + 1;
            for(const node of adjList[head]) {
                if(!visited[node]) {
                    queue.push(node);
                    visited[node] = true;
                    level[node] = lev;
                }
            }
            
        }
        
    }
    
    const maxLev = Math.max(...level);
    
    return level.filter(v => v === maxLev).length;
}