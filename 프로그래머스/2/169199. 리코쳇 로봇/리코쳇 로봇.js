function solution(board) {
    const { map, sx, sy, gx, gy } = board.reduce((acc, item, idx) => {
        if(item.includes('R')) {
            acc.sx = idx;
            acc.sy = item.indexOf('R');
        }
        if(item.includes('G')) {
            acc.gx = idx;
            acc.gy = item.indexOf('G');
        }
        acc.map.push(item.split(''));
        return acc;
    }, { map: [], sx: 0, sy: 0, gx: 0, gy: 0 });
    
    const row = map.length;
    const col = map[0].length;
    
    const visited = Array.from({ length: row }, () => Array.from({ length: col }).fill(-1));
    
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    const queue = [[sx, sy]];
    visited[sx][sy] = 0;
    
    while(queue.length > 0) {
        const size = queue.length;
        
        for(let i = 0; i < size; i++) {
            const [x, y] = queue.shift();
            const currentDistance = visited[x][y];
            
            if(board[x][y] === 'G') break;
            
            for(const [dx, dy] of directions) {
                let nx = x;
                let ny = y;
                while(true) {
                    const nextX = nx + dx;
                    const nextY = ny + dy;
                    
                    if(nextX < 0 || nextY < 0 || nextX >= row || nextY >= col || board[nextX][nextY] === 'D') break;
                    
                    nx = nextX;
                    ny = nextY;
                }
                
                if(visited[nx][ny] === -1) {
                    queue.push([nx, ny]);
                    visited[nx][ny] = currentDistance + 1;
                }
            }
        }
    }
    
    return visited[gx][gy];
}