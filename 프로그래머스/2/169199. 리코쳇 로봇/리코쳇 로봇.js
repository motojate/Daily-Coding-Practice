function solution(board) {
    
    const { map, sx, sy } = board.reduce((acc, item, idx) => {
        if(item.includes('R')) {
            acc.sx = idx;
            acc.sy = item.indexOf('R');
        }
        acc.map.push(item.split(''));
        return acc;
    }, { map: [], sx: 0, sy: 0 });
    
    const row = map.length;
    const col = map[0].length;
    
    const visited = Array.from({ length: row }, () => Array.from({ length: col }).fill(false));
    
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    const queue = [[sx, sy, 0]];
    visited[sx][sy] = true;
    
    while(queue.length > 0) {
        const size = queue.length;
        
        for(let i = 0; i < size; i++) {
            const [x, y, count] = queue.shift();
            
            if(board[x][y] === 'G') return count;
            
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
                
                if(!visited[nx][ny]) {
                    queue.push([nx, ny, count + 1]);
                    visited[nx][ny] = true;
                }
            }
        }
    }
    
    return -1;
}