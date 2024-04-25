function solution(N, stages) {
    var answer = [];
    for(let i = 1; i <= N; i++) {
        
        const rangeArr = stages.reduce((acc, item) => {
            if(item === i) {
                acc[0].push(item);
                acc[1].push(item);
            }
            if(item > i) acc[1].push(item);
            return acc;
        }, [[],[]])
        
        const rangeObj = {
            round: i,
            range: rangeArr[0].length / rangeArr[1].length
            
        }
        answer.push(rangeObj);
    }

    return answer.sort((a, b) => b.range - a.range).map(v => v.round);
}