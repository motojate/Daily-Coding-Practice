function solution(numbers, k) {
    var answer = numbers[((k - 1) * 2) % numbers.length];
    return answer;
}