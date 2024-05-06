function solution(sides) {
    const sum = sides.reduce((acc, item) => {
        acc += item;
        return acc;
    }, 0);
    const maxLength = Math.max(...sides);
    return sum - maxLength > maxLength ? 1 : 2;
}