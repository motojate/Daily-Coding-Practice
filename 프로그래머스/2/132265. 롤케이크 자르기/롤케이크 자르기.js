function solution(topping) {
    let answer = 0;
    const rightTp = new Map();
    const leftTp = new Map();
    
    for(const tp of topping) {
        const count = rightTp.get(tp) ?? 0;
        rightTp.set(tp, count + 1);
    }
    
    for(const tp of topping) {
        const leftCount = leftTp.get(tp) ?? 0;
        leftTp.set(tp, leftCount + 1);
        
        const rightCount = rightTp.get(tp);
        if(rightCount > 1) rightTp.set(tp, rightCount - 1);
        else rightTp.delete(tp);
        
        if(leftTp.size === rightTp.size) answer++;
        
    }
    
    return answer;
}
