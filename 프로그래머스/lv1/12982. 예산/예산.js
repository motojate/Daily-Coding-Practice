function solution(d, budget) {
    var answer = 0;
    let sum = 0
    const ascD = d.sort((a, b) => a - b)
    for(let i = 0; i < ascD.length; i++) {
        sum += ascD[i]
        if(sum > budget) {
            answer = i
            break
        } else {
            answer = i + 1
        }
    }
    return answer;
}