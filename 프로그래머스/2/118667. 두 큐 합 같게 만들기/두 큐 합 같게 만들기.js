function solution(queue1, queue2) {
    let { sum1, sum2 } = queue1.reduce((acc, item, idx) => {
        acc.sum1 += item;
        acc.sum2 += queue2[idx];
        return acc;
    }, { sum1: 0, sum2: 0 });
    if((sum1 + sum2) % 2 === 1) return -1;
    
    const sum = (sum1 + sum2) / 2;
    
    const queue = [...queue1, ...queue2];
    const length = queue.length;
    let count = 0;
    
    let q1Start = 0;
    let q1End = queue1.length - 1;
    let q2Start = q1End + 1;
    let q2End = queue.lenth - 1;
    
    
    while(true) {
        if(sum1 === sum) break;
        if(count > length * 2) return -1;
        
        count++;
        
        if(sum1 > sum) {
            const data = queue[q1Start];
            sum1 -= data;
            sum2 += data;
            
            q2End = q1Start;
            q1Start = (q1Start + 1) % length;
        } else {
            const data = queue[q2Start];

            sum2 -= data;
            sum1 += data;
            
            q1End = q2Start;
            q2Start = (q2Start + 1) % length;
        }
        
        if(sum1 === 0 || sum2 === 0) return -1;
    }
    return count;
}