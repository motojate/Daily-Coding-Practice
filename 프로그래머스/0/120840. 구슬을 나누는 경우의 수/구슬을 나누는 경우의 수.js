function solution(balls, share) {
    const factorial = (n) => {
        let mul = BigInt(1);
        for(let i = 1; i <= n; i++) {
            mul *= BigInt(i);
        }
        return mul;
    }
    
    const combine = (n, m) => {
        return factorial(n) / (factorial(n - m) * factorial(m));
    }
    return combine(balls, share);
}