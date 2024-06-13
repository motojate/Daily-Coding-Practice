function solution(cacheSize, cities) {
    let answer = 0;
    const queue = [];
    
    if(cacheSize === 0) return 5 * cities.length;
    
    const cacheCheck = (data) => {
        const lowerData = data.toLowerCase();
        if(queue.includes(lowerData)) {
            queue.splice(queue.indexOf(lowerData), 1);
            queue.push(lowerData);
            return true;
        }
        else return false;
    }
    
    const cacheIn = (data) => {
        if(queue.length === cacheSize) queue.shift();
        queue.push(data.toLowerCase());
    }
    
    for(const city of cities) {
        if(cacheCheck(city)) answer += 1;
        else {
            answer += 5;
            cacheIn(city);
        }
    }
    
    return answer;
}