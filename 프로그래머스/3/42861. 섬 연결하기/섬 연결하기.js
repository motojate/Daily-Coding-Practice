function solution(n, costs) {
    let answer = 0;
    const parentMap = new Map();
    
    for(let i = 0; i < n; i++) parentMap.set(i, i);
    
    const find = (x) => {
        if(parentMap.get(x) === x) return x;
        const root = find(parentMap.get(x));
        parentMap.set(x, root);
        return root;
    }
    
    const union = (a, b) => {
        const rootA = find(a);
        const rootB = find(b);
        if(rootA !== rootB) parentMap.set(rootB, rootA);
    }
    
    costs.sort((a, b) => a[2] - b[2]);
    
    for(const [a, b, cost] of costs) {
        const rootA = find(a);
        const rootB = find(b);
        
        if(rootA !== rootB) {
            union(a, b);
            answer += cost;
        }
    }

    return answer;
}