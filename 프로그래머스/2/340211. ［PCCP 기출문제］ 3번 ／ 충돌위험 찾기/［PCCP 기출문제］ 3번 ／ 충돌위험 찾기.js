function solution(points, routes) {
    let answer = 0;
    
    const timeMap = new Map();
    
    for (const route of routes) {
        let time = 0;
        
        let spotIndex = -1;
        
        while (route.length) {
            const routeIndex = route.shift() - 1;
            const [x, y] = points[routeIndex];
            
            if (spotIndex === -1) {
                const times = timeMap.get(time) ?? [];
                times.push([x, y]);
                timeMap.set(time++, times);
            } else {
                const [px, py] = points[spotIndex];
                const [r, c] = [x - px, y - py];
                
                for (let i = 0; i < Math.abs(r); i++) {
                    let cx = px;
                    
                    if (r < 0) cx -= (i + 1);
                    else cx += (i + 1);
                    
                    const times = timeMap.get(time) ?? [];
                    times.push([cx, py]);
                    timeMap.set(time++, times);
                }
                
                for (let i = 0; i < Math.abs(c); i++) {
                    let cy = py;
                    
                    if (c < 0) cy -= (i + 1);
                    else cy += (i + 1);
                    
                    const times = timeMap.get(time) ?? [];
                    times.push([x, cy]);
                    timeMap.set(time++, times);
                }            
            }
            spotIndex = routeIndex;
        }
    }
    
    const counter = new Map();
    
    for (const [time, value] of timeMap) {
        for (const [x, y] of value) {
            const key = `${time},${x},${y}`;
            counter.set(key, (counter.get(key) || 0) + 1);
        }
    }

    for (const [key, count] of counter) {
        if (count >= 2) answer++;
    }
    
    return answer;
}