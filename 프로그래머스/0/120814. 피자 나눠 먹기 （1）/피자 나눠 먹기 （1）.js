function solution(n) {
    const pizzaCount = Math.floor(n / 7);
    return n % 7 === 0 ? pizzaCount : pizzaCount + 1;
}