function solution(s) {
    var answer = '';
    const numArr = s.split(" ").map(v => Number(v));
    answer = `${Math.min(...numArr)} ${Math.max(...numArr)}`
    return answer;
}