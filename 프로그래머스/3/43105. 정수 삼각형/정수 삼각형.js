function solution(triangle) {
    const memory = Array.from({ length: triangle.length }, (_, i) => Array(i + 1).fill(0));
    memory[0][0] = triangle[0][0];
    
    for(let i = 1; i < triangle.length; i++) {
        for(let j = 0; j < triangle[i].length; j++) {
            const left = memory[i - 1][j - 1] ?? 0;
            const right = memory[i - 1][j] ?? 0;
            memory[i][j] = Math.max(left, right) + triangle[i][j];
        }
    }

    return Math.max(...memory[memory.length - 1]);
}