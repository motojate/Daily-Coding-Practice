function solution(s) {
    let answer = 0;
    const wordObj = {
        word: s[0],
        aCount: 1,
        bCount: 0,
        wordStack: [s[0]],
    }
    for(let i = 1; i < s.length; i++) {
        wordObj.wordStack.push(s[i]);
        if(s[i] === wordObj.word) {
            wordObj.aCount++;
        } else {
            wordObj.bCount++;
        }
        
        if(wordObj.aCount === wordObj.bCount) {
            answer++;
            wordObj.word = s[i + 1];
            wordObj.aCount = 0;
            wordObj.bCount = 0;
            wordObj.wordStack = [];
            continue;
        }
    }

    if(wordObj.wordStack.length !== 0) answer++;
    
    return answer;
}