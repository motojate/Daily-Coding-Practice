function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            const newNum = numbers[i] + numbers[j];
            if(!answer.includes(newNum)) answer.push(newNum);
        }
    }
    answer.sort((a, b) => a - b);
    return answer;
}