function solution(A, B) {
    let count = 0;
    const stack = [...A];
    
    while(count < A.length) {
        if(stack.join('') === B) return count;
        else {
            const data = stack.pop();
            stack.unshift(data);
            count++;
        }
    }
    
    return -1;
}