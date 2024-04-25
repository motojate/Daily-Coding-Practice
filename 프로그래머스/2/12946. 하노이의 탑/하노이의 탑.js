function solution(n) {
    var answer = [];
    const hanoi = (count, from, to, rest) => {
        if(count === 1) answer.push([from, to]);
        else {
            hanoi(count - 1, from, rest, to);
            answer.push([from, to]);
            hanoi(count - 1, rest, to, from);
        }
    }
    hanoi(n, 1, 3, 2);
    return answer;
}