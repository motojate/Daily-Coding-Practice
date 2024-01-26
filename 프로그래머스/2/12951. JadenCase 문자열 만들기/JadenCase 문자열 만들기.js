function solution(s) {
    var answer = '';
    const strArr = s.split(" ");
    strArr.forEach((v, idx) => {
        const trimStr = idx === strArr.length - 1 ? "" : " ";
        answer += v[0] ? v[0].toUpperCase() + v.toLowerCase().slice(1) + trimStr : trimStr
    })

    return answer;
}