function solution(numbers, target) {
    const numbersGraph = [[...numbers], numbers.map(v => -v)];

    let answer = 0;
    
    const bfs = (y, x, result) => {
        const currentData = numbersGraph[y][x];
        if(x === numbers.length - 1) return result + currentData === target ? answer++ : null;
        bfs(0, x + 1, result + currentData);
        bfs(1, x + 1, result + currentData);
    }
    
    bfs(0, 0, 0);
    bfs(1, 0, 0);
    
    return answer;
}