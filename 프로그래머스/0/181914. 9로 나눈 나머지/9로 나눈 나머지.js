function solution(number) {
    return [...number].reduce((acc, item) => {
        acc += +item;
        return acc;
    }, 0) % 9;
}