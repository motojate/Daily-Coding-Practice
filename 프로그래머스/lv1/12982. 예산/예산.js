function solution(d, budget) {
    var answer = 0;
    let sum = 0
    const ascD = d.sort((a, b) => a - b)
    for(let i = 0; i < ascD.length; i++) {
        sum += ascD[i]
        if(sum > budget) {
            answer = i
            break
        } else if(sum === budget) {
            answer = i + 1
            break
        } else {
            if(i === ascD.length - 1) {
                answer = i + 1
                break
            }
        }
    }
    return answer;
}