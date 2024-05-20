function solution(n) {
    var answer = [n];
    while(answer[answer.length - 1] > 1) {
        if(answer[answer.length - 1] % 2 === 0) answer.push(answer[answer.length - 1] / 2);
        else answer.push(answer[answer.length - 1] * 3 + 1);
    }
    return answer;
}