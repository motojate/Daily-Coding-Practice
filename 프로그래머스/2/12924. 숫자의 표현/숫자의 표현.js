function solution(n) {
    var answer = 1;
    for(let i = 1; i < n - 1; i++) {
        if(isValidSumNumber(i, i, n)) answer++;
    }
    return answer;
}

const isValidSumNumber = (initNum, number, n) => {
    if(number > n) return false;
    const newNumber = number + ++initNum
    if(newNumber === n) return true;
    else return isValidSumNumber(initNum, newNumber, n);
}