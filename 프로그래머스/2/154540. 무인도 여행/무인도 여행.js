function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const answer = [];
    const visited = Array.from({ length: rows }, (_, i) => Array.from({ length: cols }).fill(false));
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(maps[i][j] !== 'X' && !visited[i][j]) {
                let totalValue = 0;
                const queue = [[i, j]];
                visited[i][j] = true;
                while(queue.length > 0) {
                    const [y, x] = queue.shift();
                    totalValue += +maps[y][x];
                    directions.forEach(([dy, dx]) => {
                        const newY = y + dy;
                        const newX = x + dx;
                        if(newY >= 0 && newY < rows && newX >= 0 && newX < cols && !visited[newY][newX] && maps[newY][newX] !== 'X') {
                            visited[newY][newX] = true;
                            queue.push([newY, newX]);
                        }
                    })
                }
                answer.push(totalValue);
            }
        }
    }
    if(answer.length === 0) return [-1];
    
    return answer.sort((a, b) => a - b);
}