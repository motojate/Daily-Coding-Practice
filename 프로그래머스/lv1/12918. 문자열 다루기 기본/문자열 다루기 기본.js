function solution(s) {
    var answer = true;
    answer = parseInt(s) == s && (s.length === 4 || s.length === 6)
    return answer;
}