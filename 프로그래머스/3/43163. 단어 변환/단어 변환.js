function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    let answer = 0;
    
    for(const word of words) {
        if(checkWords(begin, target)) return answer + 1;

        if(checkWords(begin, word)) {
            begin = word;
            answer++;
        }
    }
    
    return answer;
}

const checkWords = (str1, str2) => {
    let count = 0;
    
    for(let i = 0; i < str1.length; i++) {
        if(str1[i] !== str2[i]) count++;
        if(count >= 2) return false;
    }
    
    return true;
}