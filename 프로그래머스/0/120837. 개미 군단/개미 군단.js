function solution(hp) {
    const fiveCount = Math.floor(hp / 5);
    hp -= 5 * fiveCount;
    const thirdCount = Math.floor(hp / 3);
    hp -= 3 * thirdCount;
    const oneCount = hp / 1;
    return oneCount + thirdCount + fiveCount;
}