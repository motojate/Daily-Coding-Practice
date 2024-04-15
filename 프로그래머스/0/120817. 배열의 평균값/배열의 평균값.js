function solution(numbers) {
    const sum = numbers.reduce((acc, item) => {
        acc += item;
        return acc;
    }, 0);
    return sum / numbers.length;
}