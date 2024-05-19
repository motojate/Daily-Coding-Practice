function solution(before, after) {
    for(const str of before) {
        if(after.includes(str)) after = after.replace(str, '');
    }
    return !after.length ? 1 : 0;
}