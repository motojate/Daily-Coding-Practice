function solution(board) {
    // 1. board를 편하게 작업하기 위해 2차원 배열로 만든 후, 시작 좌표와, 도착 좌표를 구해준다.
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
    
    // 2. 방문했는지 여부를 저장하는 2차원 배열을 생성한다. 여기서 해당 좌표까지의 최소 비용을 기록한다.
    const visited = Array.from({ length: row }, () => Array.from({ length: col }).fill(-1));
    
    // 3. 동, 서, 남, 북으로만 이동이 가능하니 방향성을 배열에 담아준다.
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    // 4. 큐에 시작 좌표를 입력하고, BFS 탐색을 시작한다.
    const queue = [[sx, sy]];
    visited[sx][sy] = 0;
    
    while(queue.length > 0) {
        const size = queue.length;
        
        for(let i = 0; i < size; i++) {
            const [x, y] = queue.shift();
            
            // 5. 현재까지의 최소 비용을 변수에 담아준다. 
            const currentDistance = visited[x][y];
            
            // 6. 목표 지점에 도착하면 멈춘다.
            if(x === gx && y === gy) break;
            
            // 7-1. 동, 서, 남, 북 방향으로 갈 수 있는 모든 경로를 탐색한다.
            for(const [dx, dy] of directions) {
                let nx = x;
                let ny = y;
                
                // 7-2. 미끄러지는 것을 표현.
                while(true) {
                    // 7-3. 말이 미끄러지는 거지, 우리는 한 칸씩 움직인다.
                    const nextX = nx + dx;
                    const nextY = ny + dy;
                    
                    // 7-4. 이동하려는 곳이 벽이거나, 장애물이면 미끄러지는 것을 멈춘다.
                    if(nextX < 0 || nextY < 0 || nextX >= row || nextY >= col || board[nextX][nextY] === 'D') break;
                    
                    // 7-5. 이동할 수 있는 곳으로 이동하면 현재 위치를 변경해준다.
                    nx = nextX;
                    ny = nextY;
                }
                
                // 7-6. 미끄러지는 것을 종료했을 때, 도착한 곳이 아직 탐색하지 않은 곳이면 큐에 넣어준다.
                if(visited[nx][ny] === -1) {
                    queue.push([nx, ny]);
                    
                    // 7-7. 이 지점까지 도착하려면, 현재까지 온 비용에서 방금 미끄러진 코스를 포함해야 하니 1을 더하여 기록해준다.
                    visited[nx][ny] = currentDistance + 1;
                }
            }
        }
    }
    
    // 8. 목표하는 곳의 기록치를 반환다.
    return visited[gx][gy];
}