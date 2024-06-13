function solution(n, t, m, p) {
    let answer = '';
    let i = 0;
    let order = 1;
    
    const generateNumber = (num) => {
        return num.toString(n).toUpperCase();
    }
    
    while(answer.length < t) {
        const num = generateNumber(i++);
        for(const str of num) {
            if(order === p) {
                answer += str;
                if(answer.length === t) return answer;
            }
            
            order = order % m + 1;

        }
    }
    
    
    return answer;
}