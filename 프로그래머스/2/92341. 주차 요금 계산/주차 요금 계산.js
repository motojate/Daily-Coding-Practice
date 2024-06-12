function solution(fees, records) {
    const recordMap = new Map();
    const timeMap = new Map();
    const lastTime = 23 * 60 + 59;
    
    for(const record of records) {
        const [time, number, type] = record.split(' ');
        const timeSplit = time.split(':').map(Number)
        const minuteTime = timeSplit[0] * 60 + timeSplit[1];
        
        if(type === 'IN') recordMap.set(number, minuteTime);
        else {
            const beforeTime = recordMap.get(number);
            timeMap.set(number, (timeMap.get(number) ?? 0) + minuteTime - beforeTime);
            recordMap.delete(number);
        }
    }
    
    for(const [key, time] of recordMap) {
        const culTime = lastTime - time;
        timeMap.set(key, (timeMap.get(key) ?? 0) + culTime);
    }
    
    return [...timeMap.entries()].sort((a, b) => a[0] - b[0]).map(([_, v]) => {
        if(v < fees[0]) return fees[1];
        v -= fees[0];
        return Math.ceil(v / fees[2]) * fees[3] + fees[1];
    });
}