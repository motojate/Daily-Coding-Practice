function solution(order) {
    var answer = 0;
    for(const coffee of order) {
        if(coffee.includes('americano') || coffee.includes('anything')) answer += 4500;
        else answer += 5000;
    }
    return answer;
}