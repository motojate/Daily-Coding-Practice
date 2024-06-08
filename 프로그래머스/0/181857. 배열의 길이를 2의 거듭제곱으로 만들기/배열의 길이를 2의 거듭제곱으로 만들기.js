function solution(arr) {
    const length = 2 ** Math.ceil(Math.log2(arr.length));
    const answer = Array.from({ length: length }).fill(0);
    for(let i = 0; i < arr.length; i++) answer[i] = arr[i];
    return answer;
}