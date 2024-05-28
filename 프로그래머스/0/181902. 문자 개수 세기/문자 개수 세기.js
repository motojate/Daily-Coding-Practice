function solution(my_string) {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const answer = Array.from({ length: alpha.length }).fill(0);
    for(const str of my_string) answer[alpha.indexOf(str)]++;
    return answer;
}