function solution(n, m) {
    var answer = [];
    const gcdA = gcd(n, m)
    const lcmA = (n * m) / gcdA
    answer.push(gcdA, lcmA)
    return answer;
}

function gcd(a, b) {
    if(a % b === 0) return b
    return gcd(b, a % b)
}