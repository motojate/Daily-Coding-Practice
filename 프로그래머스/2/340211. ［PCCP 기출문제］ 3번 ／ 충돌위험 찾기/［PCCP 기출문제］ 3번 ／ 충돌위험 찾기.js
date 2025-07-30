function solution(points, routes) {
    let answer = 0;
    const visited = new Map();
    
    const visit = (x, y, t) => {
        const key = `${t}-${x}-${y}`;
        const count = visited.get(key) ?? 0;
        
        if (count === 1) answer++;
        
        visited.set(key, count + 1);
    }
    
    for (const route of routes) {
        let time = 0;
        
        let [prevX, prevY] = [-1, -1];
        
        for (let i = 0; i < route.length; i++) {
            const [x, y] = points[route[i] - 1];
            
            if (i === 0) {
                visit(time++, x, y);
            } else {
                const [dx, dy] = [x - prevX, y - prevY];
                
                const stepX = Math.sign(dx);
                const stepY = Math.sign(dy);
                
                for (let j = 1; j <= Math.abs(dx); j++) {
                    visit(time++, prevX + stepX * j, prevY);
                }
                
                for (let j = 1; j <= Math.abs(dy); j++) {
                    visit(time++, x, prevY + stepY * j);
                }
                    
            }
            
            [prevX, prevY] = [x, y];
        }
    }
    
    return answer;
}