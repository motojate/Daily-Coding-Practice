function solution(numer1, denom1, numer2, denom2) {
    const numer = numer1 * denom2 + numer2 * denom1;
    const denom = denom1 * denom2;

    const gcd = (a, b) => {
        if(a % b === 0) return b;
        return gcd(b, a % b);
    }
        
    var answer = [numer / gcd(numer, denom), denom / gcd(numer, denom)];
    return answer;
}