function solution(left, right) {
    var answer = 0;
    for(let i = left; i <= right; i++) {
        answer += countOfMeasure(i) ? i : -i
    }
    return answer;
}

function countOfMeasure(n) {
    let count = 0
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) count++
    }
    return count % 2 === 0
}