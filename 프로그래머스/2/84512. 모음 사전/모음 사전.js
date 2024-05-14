function solution(word) {
    const words = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    const calNum = (idx) => {
        let sum = 0;
        for(let i = 0; i <= idx; i++) {
            sum += 5 ** i;
        }
        return sum;
    }
    
    for(let i = 0; i < word.length; i++) {
        answer += words.indexOf(word[i]) * calNum(4 - i) + 1;
    }
    
    return answer;
}