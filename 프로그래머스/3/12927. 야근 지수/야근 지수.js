function solution(n, works) {
    let max = Math.max(...works);
    let answer = 0;
    const map = new Map();
    for(const work of works) {
        const getCount = map.get(work) ?? 0;
        map.set(work, getCount + 1);
    }
    for(let i = 0; i < n; i++) {
        const getMaxCount = map.get(max);
        if(getMaxCount > 1) {
            map.set(max, getMaxCount - 1);
            const getCount = map.get(max - 1) ?? 0;
            map.set(max - 1, getCount + 1);
        } else {
            map.delete(max);
            const getCount = map.get(max - 1) ?? 0;
            map.set(max - 1, getCount + 1);
            max--;
        }
        
    }
    for(const [key, value] of map) {
        if(key <= 0) continue;
        answer += key ** 2 * value;
    }
    return answer;
}