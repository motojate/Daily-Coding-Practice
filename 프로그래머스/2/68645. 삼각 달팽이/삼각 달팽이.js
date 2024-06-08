function solution(n) {
    const arr = Array.from({ length: n }, (_, i) => Array.from({ length: i + 1}).fill(0));
    const directions = [[1, 0], [0, 1], [-1, -1]];
    
    const drawSnail = (num, x, y, direction, data) => {
        if(num === 0) return;
        const [dx, dy] = directions[direction];       
        for(let i = 0; i < num; i++) {
            arr[x][y] = data++;
            if(i !== num - 1) {
                x += dx;
                y += dy;
            }
        }
        
        const nextDirection = (direction + 1) % 3
        x += directions[nextDirection][0];
        y += directions[nextDirection][1];
        drawSnail(num - 1, x, y, nextDirection, data);
    }
    
    drawSnail(n, 0, 0, 0, 1);
    
    return arr.flat();
}