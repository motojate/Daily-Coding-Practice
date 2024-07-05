function solution(n, costs) {
    let answer = 0;
    const parentSet = Array.from({ length: n }, (_, idx) => idx);
    
    costs.sort((a, b) => a[2] - b[2]);
    
    for(const [a, b, cost] of costs) {
        const aP = parentSet[a];
        const bP = parentSet[b];
        
        if(aP === bP) continue;
        
        if(aP > bP) setParent(parentSet, aP, bP);
        else setParent(parentSet, bP, aP);
        
        answer += cost;
    }

    return answer;
}

const setParent = (arr, a, b) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === a) arr[i] = b;
    }
}