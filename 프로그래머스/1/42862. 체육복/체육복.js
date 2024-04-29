function solution(n, lost, reserve) {
    let realLost = lost.filter(v => !reserve.includes(v)).sort((a, b) => a - b);
    let realReserve = reserve.filter(v => !lost.includes(v)).sort((a, b) => a - b);
    
    let answer = n - realLost.length;
    
    for(let i = 0; i < realLost.length; i++) {
        if(realReserve.includes(realLost[i] - 1)) {
            answer++;
            realReserve =  realReserve.filter(v => v !== realLost[i] - 1);
            continue;
        }
        else if(realReserve.includes(realLost[i] + 1)) {
            answer++;
            realReserve =  realReserve.filter(v => v !== realLost[i] + 1);
            continue;
        }
    }
    
    return answer;
}