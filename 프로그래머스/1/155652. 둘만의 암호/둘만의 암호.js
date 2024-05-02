function solution(s, skip, index) {
    var answer = '';
    const alphaStr = 'abcdefghijklmnopqrstuvwxyz';
    const alpha = alphaStr.split('').filter(v => !skip.includes(v));
    
    for(const str of s) {
        const alphaIndex = (alpha.indexOf(str) + index) % alpha.length;
        answer += alpha[alphaIndex];
    }
    
    return answer;
}
