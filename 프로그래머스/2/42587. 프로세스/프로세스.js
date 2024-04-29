function solution(priorities, location) {
    var answer = 0;
    const queue = priorities.map((v, idx) => ({
        value: v,
        location: idx
    }))
    
    while(queue.length > 0) {
        const work = queue.shift();
        if(work.value >= Math.max(...queue.map(v => v.value))) {
            if(work.location === location) return answer + 1;
            else answer++;
        } else {
            queue.push(work);
        }
    }
    
}