const possibleWords = ['aya', 'ye', 'woo', 'ma'];

function solution(babbling) {
    var answer = 0;
  
    for(const str of babbling) {
       if(checkWords(str, possibleWords)) answer++;
    }
    return answer;
}

const checkWords = (str, wordsArray) => {
    if(str.length === 0) return true;
    for(const word of wordsArray) {
        
        if(str.startsWith(word)) {
            return checkWords(str.replace(word, ''), possibleWords.filter(v => v !== word));
        }
    }
    return false;
}