function solution(n, control) {
    const map = {
        'w': 1,
        's': -1,
        'd': 10,
        'a': -10
    }
    for(const str of control) {
        n += map[str];
    }
    return n;
}