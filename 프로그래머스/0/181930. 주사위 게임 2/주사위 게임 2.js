function solution(a, b, c) {
    if(a === b && b === c) return (3 * a) * (3 * a ** 2) * (3 * a ** 3);
    else if (a !== b && b !== c && a !== c) return a + b + c;
    else return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
}