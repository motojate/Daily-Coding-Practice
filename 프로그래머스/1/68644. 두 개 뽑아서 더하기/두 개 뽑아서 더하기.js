function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i === j) continue;
            const newNum = numbers[i] + numbers[j];
            if(!answer.includes(newNum)) answer.push(newNum);
        }
    }
    answer.sort((a, b) => a - b);
    return answer;
}