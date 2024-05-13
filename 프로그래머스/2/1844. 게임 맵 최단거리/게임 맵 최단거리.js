function solution(maps) {
    const mapsAddVisited = maps.map(row => row.map(value => ({ isVisited: false, value })));
    const n = mapsAddVisited.length - 1;
    const m = mapsAddVisited[0].length - 1;
    const queue = [[0, 0, 1]];
    
    const vector = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    while (queue.length > 0) {
        const [y, x, walkCount] = queue.shift();
        
        if (y < 0 || x < 0 || y > n || x > m) continue;
        if (mapsAddVisited[y][x].isVisited || mapsAddVisited[y][x].value === 0) continue;
        if (y === n && x === m) return walkCount;
        
        mapsAddVisited[y][x].isVisited = true;
        
        for (const v of vector) {
            const newY = y + v[0];
            const newX = x + v[1];
            if (newY >= 0 && newX >= 0 && newY <= n && newX <= m && !mapsAddVisited[newY][newX].isVisited && mapsAddVisited[newY][newX].value === 1) {
                queue.push([newY, newX, walkCount + 1]);
            }
        }
    }
    
    return -1;
}