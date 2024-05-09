function solution(array) {
    const max = Math.max(...array);
    const maxIdx = array.findIndex(v => v === max);
    return [max, maxIdx];
}