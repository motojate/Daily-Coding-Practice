function solution(sequence, k) {
    const answer = [0, Infinity];
    
    let start = 0;
    let end = 0;
    let sum = sequence[start];
    
    const changeIdx = (i, j) => {
        const [x, y] = answer;
        if(y - x > j - i) {
            answer[0] = i;
            answer[1] = j;
        }
    }
    
    while(end < sequence.length) {
        if(sum === k) changeIdx(start, end);
        
        if(sum <= k) {
            end++;
            sum += sequence[end];
        }
        if(sum > k) {
            sum -= sequence[start];
            start++;
        }
    }
    
    return answer;
}