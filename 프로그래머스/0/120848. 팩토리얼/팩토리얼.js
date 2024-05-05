function solution(n) {
    let temp = 1;
    let count = 1;
    while(true) {
        temp *= count;
        if(temp > n) {
            return count - 1;
        } else count++;
    }
}