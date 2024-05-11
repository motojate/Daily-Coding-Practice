function solution(n) {
    return [...n.toString()].reduce((acc, item) => {
        acc += +item;
        return acc;
    }, 0);
}