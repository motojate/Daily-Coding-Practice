function solution(my_string) {
    var answer = [];
    let temp = '';
    for(const str of my_string.trim()) {
        if(str !== ' ') temp += str;
        else {
            if(temp === '') continue;
            answer.push(temp);
            temp = '';
        }
    }
    answer.push(temp);
    return answer;
}