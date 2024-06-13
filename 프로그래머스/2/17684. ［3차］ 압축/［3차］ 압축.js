function solution(msg) {
    const mapper = ['-', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const answer = [];
    
    for(let i = 0; i < msg.length; i++) {
        let idx = i;
        let word = msg[i];
        while(true) {
            const findWord = word + msg[++idx];
            if(idx >= msg.length) break;
            if(mapper.includes(findWord)) {
                word = findWord;
                i++;
            } else {
                mapper.push(findWord);
                break;
            }
        }
        answer.push(mapper.indexOf(word));
    }
    
    return answer;
}