function solution(a, b) {
    const front = +`${a}${b}`;
    const back = 2 * a * b;
    return front > back ? front : back;
}