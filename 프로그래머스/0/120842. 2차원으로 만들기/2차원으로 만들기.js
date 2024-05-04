function solution(num_list, n) {
    const answer = [];
    let stack = [num_list[0]];
    
    for(let i = 1; i <= num_list.length; i++) {
        if(i % n === 0) {
            answer.push(stack);
            stack = [];
        }
        stack.push(num_list[i]);
    }
    
    return answer;
}