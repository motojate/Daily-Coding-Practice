function solution(queue1, queue2) {
    let { sum1, sum2 } = queue1.reduce((acc, item, idx) => {
        acc.sum1 += item;
        acc.sum2 += queue2[idx];
        return acc;
    }, { sum1: 0, sum2: 0 });
    if((sum1 + sum2) % 2 === 1) return -1;
    
    const sum = (sum1 + sum2) / 2;
    
    const queue = [...queue1, ...queue2, ...queue1];
    let q1Idx = 0;
    let q2Idx = queue1.length;
    
    let count = 0;
    
    for(let i = 0; i < queue.length; i++) {
        if(sum1 === sum) break;
        if(sum1 > sum) {
            const data = queue[q1Idx];
            sum1 -= data;
            sum2 += data;
            q1Idx++;
        } else {
            const data = queue[q2Idx];
            sum2 -= data;
            sum1 += data;
            q2Idx++;
        }
        if(sum1 === 0 || sum2 === 0) return -1;
        
        count++;
    }
    
    return sum1 === sum ? count : -1;
}