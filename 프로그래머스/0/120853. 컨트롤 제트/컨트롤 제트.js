function solution(s) {
    const sArr = s.split(' ')
    return sArr.reduce((acc, item, idx) => {
        if(item === 'Z') acc -= sArr[idx - 1];
        else acc += +item;
        return acc;
    }, 0);
}