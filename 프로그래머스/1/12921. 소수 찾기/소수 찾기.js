function solution(n) {
    const arr = Array.from({ length: n + 1 }, (_, idx) => idx > 1);
    for(let i = 2; i * i <= n; i++) {
        if(arr[i]) {
            for(let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    return arr.filter(data => data).length;
}
