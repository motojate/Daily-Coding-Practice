function solution(n,a,b)
{
    var answer = 0;
    [a, b] = [Math.min(a, b), Math.max(a, b)];
    
    while(a != b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }

    return answer;
}
