function solution(my_string) {
    var answer = 0;
    for(const str of my_string) {
        const parseNum = Number(str);
        if(!Number.isNaN(parseNum)) answer += +str;
    }
    return answer;
}