function solution(arr) {
    var answer = [];
    answer = arr.filter((v) => v !== Math.min(...arr))
    if(arr.length === 1) answer.push(-1)
    return answer;
}