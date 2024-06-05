function solution(order) {
    let answer = 0;
    let temp = 1;
    const stack = [];

    for (let i = 0; i < order.length; i++) {
        const current = order[i];

        while(temp <= current) stack.push(temp++);

        if(stack.pop() !== current) break;

        answer++;
    }

    return answer;
}