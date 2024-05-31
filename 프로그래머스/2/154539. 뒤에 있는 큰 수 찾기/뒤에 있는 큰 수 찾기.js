function solution(numbers) {
    const stack = [];
    const answer = [];
    for(let i = 0; i < numbers.length; i++) {
        answer.push(-1);
        const number = numbers[i];
        if(stack.length === 0 || number <= stack[stack.length - 1].value) stack.push({ value: number, idx: i });
        else {
            while(stack.length > 0 && stack[stack.length - 1].value < number) {
                const data = stack.pop();
                answer[data.idx] = number;
            }
            stack.push({ value: number, idx: i });
        }
    }
    
    return answer;
}