function solution(participant, completion) {
    const runnerMap = new Map();
    
    for(let i = 0; i < participant.length; i++) {
        const runner = participant[i];
        runnerMap.set(runner, runnerMap.get(runner) ? runnerMap.get(runner) + 1 : 1);
    }
    
    for(let i = 0; i < completion.length; i++) {
        const runner = completion[i];
        runnerMap.set(runner, runnerMap.get(runner) - 1);
    }
    
    for(const [key, value] of runnerMap) {
        if(value === 1) return key;
    }
    
}