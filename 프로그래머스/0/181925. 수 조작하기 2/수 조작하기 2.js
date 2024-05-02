function solution(numLog) {
    var answer = '';
    const numMap = {
        "1": "w",
        "-1": "s",
        "10": "d",
        "-10": "a"
    }
    for(let i = 1; i < numLog.length; i++) {
        const data = numMap[numLog[i] - numLog[i - 1]];
        answer += data;
    }
    return answer;
}