function solution(strArr) {
    const answer = Array.from({ length: 30 }).fill(0);
    for(const str of strArr) {
        answer[str.length - 1]++;
    }
    return answer.sort((a, b) => b - a)[0];
}