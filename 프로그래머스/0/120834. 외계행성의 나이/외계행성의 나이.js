function solution(age) {
    var answer = '';
    for(const str of age.toString()) {
        answer += String.fromCharCode(+str + 97);
    }
    return answer;
}