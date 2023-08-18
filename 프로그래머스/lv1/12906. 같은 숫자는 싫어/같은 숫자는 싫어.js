function solution(arr)
{
    return arr.filter((data, idx) => data !== arr[idx - 1]);
}