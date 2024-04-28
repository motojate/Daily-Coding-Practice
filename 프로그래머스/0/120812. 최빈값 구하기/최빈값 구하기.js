function solution(array) {
    const arrMap = new Map();
    let answer = 0;
    let maxNum = 0;
    
    for(const num of array) {        
        const getNum = arrMap.get(num);
        if(getNum) arrMap.set(num, getNum + 1);
        else arrMap.set(num, 1);
    }
    
    for(const [key, value] of arrMap) {
        if(value < maxNum) continue;
        else if(value === maxNum) answer = -1;
        else {
            maxNum = value;
            answer = key;
        }
    }
    
    return answer;
}