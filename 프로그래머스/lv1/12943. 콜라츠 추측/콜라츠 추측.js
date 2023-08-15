function solution(num) {
    var answer = 0;
    while(true) {
        if(num === 1) break
        if(num % 2 === 0) num = num / 2
        else num = num * 3 + 1
        
        answer++
    }
    
    answer = answer >= 500 ? -1 : answer
    return answer;
}