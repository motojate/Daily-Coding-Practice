function solution(a, b) {
    var answer = 0;
    while(true) {
          if(a === b) {
            answer += a
            break
        }
        if(a < b) {
            answer += a
            a++
        } else {
            answer += b
            b++
        }
    }
    return answer;
}