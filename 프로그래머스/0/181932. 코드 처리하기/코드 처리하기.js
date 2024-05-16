function solution(code) {
    let result = '';
    let mode = false;
    for(let i = 0; i < code.length; i++) {
        if(code[i] === '1') {
            mode = !mode;
            continue;
        }
        if((!mode && i % 2 === 0) || (mode && i % 2 === 1)) result += code[i];

    }
    return result.length ? result : 'EMPTY';
}