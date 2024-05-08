function solution(numbers) {
    let answer = numbers;
    const numArr= ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for(let i = 0; i < numArr.length; i++) {
        answer = answer.replaceAll(numArr[i], i);
    }
    return +answer;
}