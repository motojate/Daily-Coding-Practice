function solution(score) {
    const avgScore = score.map(v => (v[0] + v[1]) / 2);

    const sortedScore = avgScore.slice().sort((a, b) => b - a);
    
    return avgScore.map(v => sortedScore.indexOf(v) + 1);
}