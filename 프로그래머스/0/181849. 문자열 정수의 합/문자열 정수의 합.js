function solution(num_str) {
    var answer = 0;
    for(const str of num_str) {
        answer += +str;
    }
    return answer;
}