function solution(s, n) {
    var answer = '';
    for(const index in s) {
        if(s[index] === ' ') {
            answer += s[index];
            continue;
        };

        const newStr = calculateAskiiCode(s.charCodeAt(index), n);
        answer += newStr;
    }
  
    return answer;
}

const calculateAskiiCode = (code, n) => {
    if(code >= 65 && code <= 90) {
        const newCode = code + n >= 91 ? code + n - 26 : code + n;
        return String.fromCharCode(newCode);
    } else if (code >= 97 && code <= 122) {
        const newCode = code + n >= 123 ? code + n - 26 : code + n;
        return String.fromCharCode(newCode);
    } else return String.fromCharCode(code);
}