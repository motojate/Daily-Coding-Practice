function solution(msg) {
    const mapper = ['-', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const answer = [];
    
    for(let i = 0; i < msg.length; i++) {
        let idx = i;
        let word = msg[i];
        while(true) {
            if(idx >= msg.length) break;
            if(mapper.includes(word + msg[++idx])) {
                word += msg[idx];
                i++;
            } else {
                mapper.push(word + msg[idx]);
                break;
            }
        }
        answer.push(mapper.indexOf(word));
    }
    
    return answer;
}