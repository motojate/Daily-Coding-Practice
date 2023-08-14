function solution(n)
{
    var answer = 0;

    for(const i of n.toString()) {
        answer += parseInt(i)
    }

    return answer;
}