function solution(n, edge) {
    const visited = Array.from({ length: n + 1 }).fill(false);
    const level = Array.from({ length: n + 1 }).fill(0);
    
    const queue = [1];
    visited[1] = true;

    const visitNode = (node, head, lev) => {
        if(!visited[node]) {
            queue.push(node);
            visited[node] = true;
            level[node] = lev;
        }
    }
    
    while(queue.length > 0) {
        const size = queue.length;
        
        for(let i = 0; i < size; i++) {
            const head = queue.shift();
            const lev = level[head] + 1;
            for(const [n1, n2] of edge) {
                if(n1 === head) visitNode(n2, head, lev);
                if(n2 === head) visitNode(n1, head, lev);
            }
            
        }
        
    }
    
    const maxLev = Math.max(...level);
    
    return level.filter(v => v === maxLev).length;
}