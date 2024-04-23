function solution(babbling) {
    let answer = 0;
    const possibleWords = ['aya', 'ye', 'woo', 'ma'];
    
    const compareWords = (str, filter) => {
        if(str.length === 0) return true;
        
        for(const word of filter) {
            if(str.startsWith(word)) {
                return compareWords(str.replace(word, ''), filter.filter(v => v !== word));
            }
        }
        return false;
    }
    while(babbling.length > 0) {
        const str = babbling.pop();
        const isPosible = compareWords(str, possibleWords);
        if(isPosible) answer++;
       
    }

    return answer;
}