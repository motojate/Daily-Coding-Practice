function solution(n) {
    var answer = 0;
    for(let i = 4; i <= n; i++) {
        if(checkNum(i)) answer++;
    }
    return answer;
}

const checkNum = (n) => {
    let count = 0;
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) count++;
    }
    return count >= 3;
}