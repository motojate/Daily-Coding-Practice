function solution(numbers) {
    const [a, b, ...c] = numbers.sort((a, b) => b - a);
    return a * b;
}