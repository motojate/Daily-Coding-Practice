function solution(arr, queries) {
    var answer = [];
    for(const query of queries) {
        const [s, e, k] = query;
        const stack = [];
        for(let i = s; i <= e; i++) {
            if(arr[i] > k) stack.push(arr[i]);
        }
        if(stack.length) {
            stack.sort((a, b) => a - b);
            answer.push(stack[0]);
        } else answer.push(-1);
    }
    return answer;
}