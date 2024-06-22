function solution(storey) {
    let answer = 0;
    
    while(storey > 0) {
        const mod = storey % 10;
        
        if(mod > 5) {
            answer += 10 - mod
            storey = Math.floor((storey + 10) / 10);
        } else if(mod < 5) {
            answer += mod;
            storey = Math.floor(storey / 10);
        } else {
            answer += mod;
            const next = Math.floor(storey / 10);
            if(next % 10 >= 5) storey = next + 1;
            else storey = next;
        }
    }
    
    return answer;
}