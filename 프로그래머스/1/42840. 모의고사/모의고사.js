function solution(answers) {
    var answer = [];
    const a1 = [1, 2, 3, 4, 5];
    const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let a1Ans = 0, a2Ans = 0, a3Ans = 0;
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === a1[i % a1.length]) a1Ans++;
        if(answers[i] === a2[i % a2.length]) a2Ans++;
        if(answers[i] === a3[i % a3.length]) a3Ans++;
    }
    const maxVal = Math.max(a1Ans, a2Ans, a3Ans);
    if(maxVal === a1Ans) answer.push(1);
    if(maxVal === a2Ans) answer.push(2);
    if(maxVal === a3Ans) answer.push(3);
    return answer;
}