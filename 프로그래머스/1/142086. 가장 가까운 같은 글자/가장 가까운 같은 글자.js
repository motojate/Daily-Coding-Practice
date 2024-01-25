function solution(s) {
    var answer = [];
    const newMap = new Map()
    for(let i = 0; i < s.length; i++) {
        const keyIndex = newMap.get(s[i]);
        if(keyIndex !== undefined) {
            answer.push(i - keyIndex);
        } else {
            answer.push(-1);
        }
        newMap.set(s[i], i);
    }
    return answer;
}