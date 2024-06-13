function solution(n, k) {
    let answer = 0;
    let temp = '';
    const nk = n.toString(k);
    
    for(const str of nk.split('0').filter(v => v)) {
        if(isPrime(+str)) answer++;
    }
    
    return answer;
}

const isPrime = (num) => {
    if(num === 1) return false;
    if(num <= 3) return true;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}