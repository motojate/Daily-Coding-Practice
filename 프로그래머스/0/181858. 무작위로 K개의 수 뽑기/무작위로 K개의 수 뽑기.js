function solution(arr, k) {
    const answer = Array.from({ length: k }).fill(-1);
    
    let i = 0;
    for(const value of new Set(arr)) {
        if(i === k) break;
        answer[i] = value;
        i++;
    }
    return answer;
}