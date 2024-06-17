function solution(x, y, n) {
    if(x === y) return 0;
    
    const queue = [[y, 0]];
    const visited = new Set();
    visited.add(x);
    
    while(queue.length > 0) {
        const [current, count] = queue.shift();
        
        const operations = [];
        if(current - n > 0) operations.push(current - n);
        if(current % 2 === 0) operations.push(current / 2);
        if(current % 3 === 0) operations.push(current / 3);
        
        for(const next of operations) {
            if(next < x) continue;
            if(next === x) return count + 1;
            if(!visited.has(next)) {
                visited.add(next);
                queue.push([next, count + 1]);
            }
        }
        
    }
    
    return -1;
}