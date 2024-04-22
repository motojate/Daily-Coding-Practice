function solution(clothes) {
    const map = new Map();
    let answer = 1;
    
    clothes.forEach((v) => {
        const count = map.get(v[1]) ?? 0;
        map.set(v[1], count + 1);
    })
    
    for(const value of map.values()) {
        answer *= value + 1
    }
    
    return answer - 1;
}