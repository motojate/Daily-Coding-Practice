function solution(n) {
    var answer = 0;
    let a0 = 0;
    let a1 = 1;
    for(let i = 2; i <= n; i++) {
        const a2 = (a0 + a1) % 1234567;
        if(i % 2 === 0) a0 = a2 % 1234567;
        else a1 = a2 % 1234567;
        answer = a2;
    }
    return answer % 1234567;
}


