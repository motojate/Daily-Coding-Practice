function solution(n) {
    const answer = Array.from({ length: n }, () => Array.from({ length: n }).fill(0));
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    const generate = (y, x, i, data) => {
        if(data > n ** 2) return;
        const [dy, dx] = direction[i]; 
        while(true) {
            if(answer[y + dy] && answer[y + dy][x + dx] === 0) {
                x += dx;
                y += dy;
                answer[y][x] = data++;
            } else break;
        }
        generate(y, x, (i + 1) % 4, data);
    }
    
    generate(0, -1, 0, 1);
    
    return answer;
}