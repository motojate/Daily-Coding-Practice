function solution(diffs, times, limit) {
    const diffMap = new Map();
    let totalC = times[0];
    
    for (let i = 1; i < diffs.length; i++) {
        const diff = diffs[i];
        const timeC = times[i] + times[i - 1];
        
        diffMap.set(diff, (diffMap.get(diff) ?? 0) + timeC);
        
        totalC += times[i];
    }
    
    let min = 1;
    let max = 100_000;
    
    const calculator = (level) => {
        let sum = totalC;
        
        for (const [diff, timeC] of diffMap) {
            if (diff > level) sum += (diff - level) * timeC;
        }
        
        return sum;
    }
        
    while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        const result = calculator(mid);
        
        if (result <= limit) max = mid - 1;
        else min = mid + 1;
    }
    
    return min;
    
}