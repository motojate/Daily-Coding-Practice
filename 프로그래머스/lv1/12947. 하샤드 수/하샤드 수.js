function solution(x) {
    var answer = true;
    let sum = 0;
    for(const s of x.toString()) {
        sum += Number(s)
    }
    answer = x % sum === 0 ? true : false
    return answer;
}