function solution(price, money, count) {
    var answer = 0;
    for(let i = 1; i <= count; i++) {
        money -= price * i
    }
    answer = money <= 0 ? Math.abs(money) : 0
    return answer;
}