function solution(numbers) {
    const stack = [];
    const numSet = new Set();
    let answer = 0;
    const permutation = (arr, acc, position) => {
        if(position === 0) return acc;
        for(let i = 0; i < arr.length; i++) {
            stack.push(acc + arr[i]);
            permutation(arr.filter((_, idx) => idx !== i), acc + arr[i], position - 1);
        }
    }
    
    permutation([...numbers], '', numbers.length);
    
    for(const num of stack) numSet.add(+num);
    
    for(const num of numSet) {
        if(isPrime(num)) answer++;
    }
    
    return answer;
}

const isPrime = (n) => {
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return true;
}