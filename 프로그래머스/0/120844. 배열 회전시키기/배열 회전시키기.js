function solution(numbers, direction) {
    if(direction === 'left') {
        const leftNum = numbers.shift();
        return [...numbers, leftNum];
    } else {
        const rightNum = numbers.pop();
        return [rightNum, ...numbers];
    }
}