function solution(n) {
    var answer = [];
    const primeNumber = [];
    for(let i = 1; i <= 10000; i++) {
        if(isPrime(i)) primeNumber.push(i);
    }
    for(let i = 0; i < primeNumber.length; i++) {
        if(n % primeNumber[i] === 0) {
            n /= primeNumber[i];
            answer.push(primeNumber[i]);
        }
    }
    return answer;
}

const isPrime = (num) => {
    if(num === 1) return false;
    
    let count = 0;
    for(let i = 1; i <= Math.sqrt(num); i++) {
        if(num % i === 0) count++;
    }
    
    return count === 1;
}