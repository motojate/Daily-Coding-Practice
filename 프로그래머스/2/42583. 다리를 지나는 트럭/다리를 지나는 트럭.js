function solution(bridge_length, weight, truck_weights) {
    const wait = [...truck_weights];
    const queue = Array.from({ length: bridge_length }).fill(0);
    
    let bridgeWeight = 0;
    let time = 0;

    while(wait.length > 0 || queue.filter(v => v > 0).length > 0) {
        time++;
        const data = queue.shift();
        if(data !== 0) bridgeWeight -= data;
        if(wait[wait.length - 1] <= weight - bridgeWeight) {
            const moveWeight = wait.pop();
            queue.push(moveWeight);
            bridgeWeight += moveWeight;
            
        } else queue.push(0);
    }
    
    return time;
}