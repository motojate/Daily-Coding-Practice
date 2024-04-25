function solution(N, stages) {
    var answer = [];
    for(let i = 1; i <= N; i++) {
        const rangeObj = {
            round: i,
            range: stages.filter(v => v === i).length / stages.filter(v => v >= i).length
        }
        answer.push(rangeObj);
    }

    return answer.sort((a, b) => b.range - a.range).map(v => v.round);
}