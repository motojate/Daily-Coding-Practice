function solution(A, B) {
    A.sort((a, b) => b - a);
    B.sort((a, b) => a - b)
    
    let answer = 0;
    
    for(const a of A) {
        const lastIdx = B.length - 1;
        if(B[lastIdx] > a) {
            answer++;
            B.pop();
        }
    }
    return answer;
}