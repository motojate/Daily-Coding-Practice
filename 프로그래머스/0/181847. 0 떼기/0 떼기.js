function solution(n_str) {
    let i = 0;
    while(true) {
        if(n_str[i] === '0') i++;
        else break;
    }
    return n_str.slice(i, n_str.length);
}