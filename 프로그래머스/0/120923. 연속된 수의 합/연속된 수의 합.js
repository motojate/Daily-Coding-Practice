function solution(num, total) {
    var answer = [];
    if(num % 2 === 1) {
        const center = total / num;
        answer.push(center);
        for(let i = 1; i < num / 2; i++) {
            answer.push(center - i);
            answer.push(center + i);
        }
    } else {
        const [prevCenter, curCenter] = [Math.floor(total / num), Math.ceil(total / num)];
        answer.push(prevCenter);
        answer.push(curCenter);
        for(let i = 1; i < num / 2; i++) {
            answer.push(prevCenter - i);
            answer.push(curCenter + i);
        }
    }
    return answer.sort((a, b) => a - b);
}