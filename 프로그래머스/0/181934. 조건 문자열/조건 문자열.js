function solution(ineq, eq, n, m) {
    if(ineq === '<') {
        return eq === '=' ? Number(n <= m) : Number(n < m);
    } else {
        return eq === '=' ? Number(n >= m) : Number(n > m);
    }
}