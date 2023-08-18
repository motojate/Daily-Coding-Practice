function solution(arr)
{
    var answer = [];

    answer = arr.filter((data, idx) => data !== arr[idx - 1])
    
    return answer;
}