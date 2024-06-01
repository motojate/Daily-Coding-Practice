function solution(ingredient) {
    let answer = 0;
    const stack = [];
    for(const order of ingredient) {
        stack.push(order);
        
        if(stack.length >= 4) {
            let str = '';
            for(let i = 0; i < 4; i++) str += stack.pop();
            if(str === '1321') answer++;
            else stack.push(...[...str].reverse());
        }
        
    }
    
    return answer;
}