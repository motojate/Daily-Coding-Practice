function solution(cipher, code) {
    return [...cipher].reduce((acc, item, idx) => {
        if((idx + 1) % code === 0) acc += item;
        return acc;
    }, '');
}