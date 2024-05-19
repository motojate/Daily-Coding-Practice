function solution(num_list) {
    var answer = [...num_list];
    const last = answer[answer.length - 1];
    const frontLast = answer[answer.length - 2];
    if(last > frontLast) answer.push(last - frontLast);
    else answer.push(last * 2);
    return answer;
}