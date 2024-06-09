function solution(rank, attendance) {
    const [a, b, c, ...d] = rank.filter((_, idx) => attendance[idx]).sort((a, b) => a - b);

    return 10000 * rank.indexOf(a) + 100 * rank.indexOf(b) + rank.indexOf(c);
}