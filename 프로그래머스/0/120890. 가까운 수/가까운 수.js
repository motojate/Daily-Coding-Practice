function solution(array, n) {
    array.sort((a, b) => a - b);
    const absArray = array.map(v => Math.abs(n - v));
    const minAbs = Math.min(...absArray);
    const idx = absArray.findIndex(v => v === minAbs);
    
    return array[idx];
}