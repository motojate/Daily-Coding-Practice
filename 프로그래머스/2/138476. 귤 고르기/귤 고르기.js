function solution(k, tangerine) {
    var answer = 0;
    const tangerineCountResult =  tangerine.reduce((obj, item) => {
        if(obj[item]) obj[item]++;
        else obj[item] = 1;
        return obj;
    }, {})
    let sum = 0;
    Object.values(tangerineCountResult).sort((a, b) => b - a).forEach((v) => {
        if(sum >= k) return;
        sum += v;
        answer++;
    });
    return answer;
}

