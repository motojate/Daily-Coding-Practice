function solution(storage, requests) {    
    const newStorage = storage.map(v => v.split(""));
    
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const row = newStorage.length;
    const col = newStorage[0].length;
    
    const bfs = (x, y) => {
        const queue = [[x, y]];
        const visited = Array.from({ length: row }, () => Array(col).fill(false));
        
        visited[x][y] = true;
        while (queue.length) {
            const [ox, oy] = queue.shift();
            
            for (const [dx, dy] of directions) {
                const nx = ox + dx;
                const ny = oy + dy;
                
                if (nx < 0 || ny < 0 || nx >= row || ny >= col) return true;
                
                if (!visited[nx][ny] && newStorage[nx][ny] === "0") {
                    queue.push([nx, ny]);
                    visited[nx][ny] = true;
                }
            }
        }
        
        return false;
    }
    
    
    for (const request of requests) {
        if (request.length === 2) {
            for (let i = 0; i < newStorage.length; i++) {
                for (let j = 0; j < newStorage[i].length; j++) {
                    if (newStorage[i][j] === request[0]) newStorage[i][j] = "0";
                }
            }
        } else {
            const result = [];
            
            for (let i = 0; i < newStorage.length; i++) {
                for (let j = 0; j < newStorage[i].length; j++) {
                    if (newStorage[i][j] === request[0]) {
                        const isSuccess = bfs(i, j);
                        
                        if (isSuccess) result.push([i, j]);
                    }
                }
            }
            
            for (const [i, j] of result) {
                newStorage[i][j] = "0";
            }
        }
    }
    
    const answer = newStorage.reduce((acc, arr) => arr.filter(v => v !== "0").length + acc, 0);
    return answer;
}