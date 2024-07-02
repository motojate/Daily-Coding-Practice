function solution(n, computers) {
    const visited = Array.from({ length: n }).fill(false);
    let answer = 0;
    
    const checkNetwork = (startIndex) => {
        const queue = [computers[startIndex]];
        visited[startIndex] = true;
    
        while(queue.length > 0) {
            const computer = queue.shift();
        
            for(let i = 0; i < computer.length; i++) {
                if(computer[i] === 1 && visited[i] === false) {
                    queue.push(computers[i]);
                    visited[i] = true;
                }
            }
        }
        
        answer++;
        
        const nextIndex = visited.indexOf(false);
        
        if(nextIndex > 0) return checkNetwork(nextIndex);
        else return;
    }
    
    checkNetwork(0);
  
    return answer;
}