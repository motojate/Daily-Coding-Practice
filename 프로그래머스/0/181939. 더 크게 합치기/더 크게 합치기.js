function solution(a, b) {
    const ab = a.toString() + b.toString();
    const ba = b.toString() + a.toString();
    return Number(ab) > Number(ba) ? Number(ab) : Number(ba);
}