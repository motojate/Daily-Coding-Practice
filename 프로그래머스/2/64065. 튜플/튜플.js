function solution(s) {
    const answer = [];
    const trimmed = s.slice(2, -2);
    const values = trimmed.split("},{");
    const tuples = values.map(v => v.split(',')).sort((a, b) => a.length - b.length);
    
    for(const tuple of tuples) {
        for(const data of tuple) {
            if(!answer.includes(+data)) answer.push(+data);
        }
    }
    
    return answer;
}