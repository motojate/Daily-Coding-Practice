function solution(maps) {
    const [s, l, e] = Array.from({ length: 3 }, () => [0, 0]);
    const targets = { 'S': s, 'L': l, 'E': e };
    
    for(let i = 0; i < maps.length; i++) {
        for(const key in targets) {
            if (maps[i].includes(key)) {
                targets[key][0] = i;
                targets[key][1] = maps[i].indexOf(key);
            }
        }
    }
    
    const lTime = bfs(s, l, maps);
    const eTime = bfs(l, e, maps);
    
    if(lTime === 0 || eTime === 0) return -1;
    
    return lTime + eTime;
}

const bfs = (start, end, map) => {
    const visited = Array.from({ length: map.length }, () => Array.from({ length: map[0].length }).fill(false));
    let time = 0;
    const queue = [start];
    visited[start[0]][start[1]] = true;
    
    while(queue.length > 0) {
        const size = queue.length;
        for(let i = 0; i < size; i++) {
            const [x, y] = queue.shift();
            
            if(x === end[0] && y === end[1]) return time;
            
            const directions = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
            for(const [nx, ny] of directions) {
                if(nx >= 0 && ny >= 0 && nx < map.length && ny < map[nx].length && map[nx][ny] !== 'X' && !visited[nx][ny]) {
                    queue.push([nx, ny]);
                    visited[nx][ny] = true;
                }
            }
        }
        time++;
    }
    
    return 0;
}