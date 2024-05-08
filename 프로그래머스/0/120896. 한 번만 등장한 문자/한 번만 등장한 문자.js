function solution(s) {
    const sMap = new Map();
    
    let answer = [];
    
    for(const str of s) {
        sMap.set(str, (sMap.get(str) ?? 0) + 1);
    }
    
    for(const [key, value] of sMap) {
        if(value === 1) answer.push(key);
    }
    
    answer.sort();

    return answer.join('');
}