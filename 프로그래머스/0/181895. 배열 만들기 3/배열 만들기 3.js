function solution(arr, intervals) {
    var answer = [];
    for(const interval of intervals) {
        const [start, end] = interval;
        answer.push(...arr.slice(start, end + 1));
    }
    return answer;
}