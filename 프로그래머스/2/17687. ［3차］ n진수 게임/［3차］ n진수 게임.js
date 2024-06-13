function solution(n, t, m, p) {
    let answer = '';
    let i = 0;
    let order = 1;
    
    const generateNumber = (num) => {
        return num.toString(n);
    }
    
    while(answer.length < t) {
        const num = generateNumber(i++);
        for(const str of num) {
            if(order === p) answer += str.toUpperCase();
            if(answer.length === t) break;
            
            order++;
            if(order > m) order %= m;
        }
    }
    
    
    return answer;
}