function solution(sides) {
    let answer = 0;
    
    const maxLength = Math.max(...sides);
    const minLength = Math.min(...sides);
    
    answer += minLength;
    
    answer += maxLength + minLength - (maxLength + 1);
    
    return answer;
}