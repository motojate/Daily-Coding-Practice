function solution(arr, n) {
    for(let i = (arr.length - 1) % 2; i < arr.length; i += 2) arr[i] += n;
    return arr;
}