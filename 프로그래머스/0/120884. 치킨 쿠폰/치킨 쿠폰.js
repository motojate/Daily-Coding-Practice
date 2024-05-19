function solution(chicken) {
    let answer = 0;
    let coupon = chicken;
    while(coupon >= 10) {
        const service = Math.floor(coupon / 10);
        coupon = service + coupon % 10;
        answer += service;
    }
    
    return answer;
}