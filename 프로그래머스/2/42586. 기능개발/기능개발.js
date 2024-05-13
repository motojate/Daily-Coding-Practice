function solution(progresses, speeds) {
    let stack = [];
    const answer = [];
    const progressesDays = progresses.map((v, idx) => Math.ceil((100 - v) / speeds[idx]));
    
    for(const day of progressesDays) {
        if(stack.length === 0) {
            stack.push(day);
        } else {
            if(day > stack[0]) {
                answer.push(stack.length);
                stack = [day];
            } else {
                stack.push(day);
            }
        }
    }
    
    answer.push(stack.length);
    
    return answer;
}