function solution(n) {
    var answer = 0;
    answer = parseInt((n.toString().split('').sort((a, b) => b - a)).join(''))
    return answer;
}