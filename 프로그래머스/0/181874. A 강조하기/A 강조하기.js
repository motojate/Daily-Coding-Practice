function solution(myString) {
    var answer = '';
    for(const str of myString) {
        if(str === 'a' || str === 'A') answer += str.toUpperCase();
        else answer += str.toLowerCase();
    }
    return answer;
}