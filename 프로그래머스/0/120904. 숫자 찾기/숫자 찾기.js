function solution(num, k) {
    const index = [...num.toString()].findIndex(v => +v === k);
    return index === -1 ? -1 : index + 1;
}