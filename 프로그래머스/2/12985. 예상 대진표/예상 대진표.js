function solution(n,a,b) {
    var answer = 0;
    
    while(a !== b) {
        [a, b] = [getNextStage(a), getNextStage(b)];
        answer++;
    }
    
    return answer;
}

const getNextStage = (stage) => {
    return Math.ceil(stage / 2);
}