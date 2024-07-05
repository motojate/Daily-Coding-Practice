function solution(m, n, startX, startY, balls) {
    const answer = [];
    
    for(const [x, y] of balls) {
        const newPos = [[-x, y], [x, -y], [2 * m - x, y], [x, 2 * n - y]];
        
        const list = [];
        
        for(const [newX, newY] of newPos) {
            if(isPointOnLine(startX, startY, newX, newY, x, y)) continue;
            
            const r = Math.abs(startX - newX) ** 2 + Math.abs(startY - newY) ** 2
            list.push(r);
        }
        answer.push(Math.min(...list));
    }
    return answer;
}

const isPointOnLine = (x1, y1, x2, y2, px, py) => {
    const slopeMatch = (py - y1) * (x2 - x1) === (y2 - y1) * (px - x1);
    
    const withinBounds = Math.min(x1, x2) <= px && px <= Math.max(x1, x2) && Math.min(y1, y2) <= py && py <= Math.max(y1, y2);
    
    return slopeMatch && withinBounds;
}