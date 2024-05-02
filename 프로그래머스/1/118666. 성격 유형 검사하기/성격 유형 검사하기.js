function solution(survey, choices) {
    const type = ['RT', 'CF', 'JM', 'AN'];
    const stack = [];
    const stackMap = {};
    for(let i = 0; i < survey.length; i++) {
        const score = choices[i];
        if(score === 4) continue;
        if(score > 4) stack.push({ str: survey[i][1], count: score % 4 })
        else stack.push({ str: survey[i][0], count: 4 - score % 4 })
    }
    stack.forEach(v => {
        stackMap[v.str] = stackMap[v.str] ? stackMap[v.str] + v.count : v.count;
    })

    return type.map(v => {
        const [prevCount, currentCount] = [stackMap[v[0]], stackMap[v[1]]];
        if((prevCount ?? 0) >= (currentCount ?? 0)) return v[0];
        else return v[1];
    }).join('');
}