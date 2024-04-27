function solution(box, n) {
    return box.reduce((acc, item) => {
        acc *= Math.floor(item / n);
        return acc;
    }, 1);
}