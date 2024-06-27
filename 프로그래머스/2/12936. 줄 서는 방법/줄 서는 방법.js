function solution(n, k) {
    const answer = [];
    const p = Array.from({ length: n }, (_, idx) => idx + 1);
    k--;
    let n2 = n;
    while(answer.length !== n) {
        const nf = f(--n2);
        const data = p[Math.floor(k / nf)];
        p.splice(p.indexOf(data), 1);
        answer.push(data);
        k %= nf;
    }
  
    return answer;
}

const f = (n) => {
    let mul = 1;
    for(let i = 1; i <= n; i++) {
        mul *= i;
    }
    return mul;
}