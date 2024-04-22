function solution(n, left, right) {
    const arr = [];
    
    for(let i = left; i <= right; i++) {
        const answer = Math.max(Math.floor(i / n) + 1, i % n + 1);
        arr.push(answer);
    }
 
    return arr;
}