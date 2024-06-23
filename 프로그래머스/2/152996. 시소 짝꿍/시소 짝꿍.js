function solution(weights) {
    const weightMap = new Map();
    const weightArr = [1/2, 3/4, 2/3, 3/2, 4/3, 2];
    let answer = 0;
    
    for(const weight of weights) {
        const data = weightMap.get(weight) ?? 0;
        answer += data; // 같은 경우.
        
        for(const w of weightArr) {
            const wData = weightMap.get(weight * w);
            if(wData) answer += wData;
        }
    
        weightMap.set(weight, data + 1);
        
    }
    return answer;
}