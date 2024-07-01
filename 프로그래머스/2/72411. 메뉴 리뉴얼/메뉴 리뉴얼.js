function solution(orders, course) {
    const answer = [];
    for(const count of course) {
        const map = new Map();
        for(const order of orders) combinations(order, count, map);
        answer.push(...findMaxKeys(map));
    }
    return answer.sort();
}

const combinations = (str, k, map) => {
    const recurse = (start, path) => {
        if(path.length === k) {
            if(map.has(path)) return map.set(path, map.get(path) + 1);
            else return map.set(path, 1);
        }
        for(let i = start; i < str.length; i++) recurse(i + 1, [...(path + str[i])].sort().join(''));
    }
    
    recurse(0, ''); 
}

const findMaxKeys = (map) => {
    let maxValue = Math.max(...Array.from(map.values()), 2);
    const maxKeys = [];
    
    for(const [key, value] of map.entries()) {
        if(value === maxValue) maxKeys.push(key);
    }
    return maxKeys;
}