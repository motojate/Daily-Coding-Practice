function solution(n) {
    const abc = ["4", "1", "2"];
    
    let a = n;
    let answer = '';
    while(a > 0) {
        answer = abc[a % 3] + answer;
        a = Math.floor((a - 1) / 3);
        
    }

    return answer;
}