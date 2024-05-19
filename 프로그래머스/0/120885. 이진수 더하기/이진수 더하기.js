function solution(bin1, bin2) {
    const num1 = [...bin1].reverse().reduce((acc, item, idx) => {
        acc += item * (2 ** idx);
        return acc;
    }, 0);
    const num2 = [...bin2].reverse().reduce((acc, item, idx) => {
        acc += item * (2 ** idx);
        return acc;
    }, 0);
    return (num1 + num2).toString(2);
}