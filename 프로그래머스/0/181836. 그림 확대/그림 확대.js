function solution(picture, k) {
    const answer = [];
    
    for(const data of picture) {
        let str = '';
        for(const px of data) {
            str += px.repeat(k);
        }
        for(let i = 0; i < k; i++) answer.push(str);
    }
    return answer;
}