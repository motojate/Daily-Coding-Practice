function solution(n) {
    var answer = [];
    const s = n.toString()
    for(const str of s) {
       answer.push(parseInt(str))
    }
    answer.reverse()
   
    return answer;
}