function solution(weights) {
    const weightMap = new Map();
    const weightRateArr = [1/2, 3/4, 2/3, 3/2, 4/3, 2];
    let answer = 0;
    
    for(const weight of weights) {
        const data = weightMap.get(weight) ?? 0;
        answer += data; // 같은 경우.
        
        for(const rate of weightRateArr) {
            const rateData = weightMap.get(weight * rate);
            if(rateData) answer += rateData;
        }
        
        weightMap.set(weight, data + 1);
    }
    
    return answer;
}