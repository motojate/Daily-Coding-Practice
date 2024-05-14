function solution(my_str, n) {
    var answer = [];
    const strArr = [...my_str];
    for(let i = 0; i < Math.ceil(my_str.length / n); i++) {
        const standard = i * n;
        answer.push(strArr.slice(standard, standard + n).join(''));
    }
    return answer;
}