function solution(arrayA, arrayB) {
    let answerA = 0;
    let answerB = 0;
    
    const AGcd = getMaxGcd(arrayA);
    const BGcd = getMaxGcd(arrayB);
    
    const ADivisors = getDivisors(AGcd);
    const BDivisors = getDivisors(BGcd);
    
    
    for(const divisor of ADivisors) {
        if(arrayB.every((v) => v % divisor !== 0)) answerA = divisor;
    }
    
    for(const divisor of BDivisors) {
        if(arrayA.every((v) => v % divisor !== 0)) answerB = divisor;
    }
    
    return Math.max(answerA, answerB);
}

const getMaxGcd = (arr) => {
    return arr.reduce((acc, item) => {
        acc = gcd(acc, item);
        return acc;
    }, arr[0]);
}

const gcd = (a, b) => {
    if(b === 0) return a;
    
    return gcd(b, a % b);
}

const getDivisors = (n) => {
    const divisors = [];
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            divisors.push(i);
            if(i !== n / i) divisors.push(n / i);
        }
    }
    
    return divisors.sort((a, b) => a - b);
}