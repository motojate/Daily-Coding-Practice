function solution(emergency) {
    return emergency.map(v => [...emergency].sort((a, b) => b - a).indexOf(v) + 1);
}