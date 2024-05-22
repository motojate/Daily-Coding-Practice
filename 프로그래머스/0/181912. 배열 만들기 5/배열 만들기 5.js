function solution(intStrs, k, s, l) {
    const answer = [];
    for(const str of intStrs) {
        const value = +str.slice(s, s + l);
        if(value > k) answer.push(value);
    }
    return answer;
}