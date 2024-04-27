function solution(rsp) {
    var answer = '';
    const mapper = {
        '2': '0',
        '0': '5',
        '5': '2'
    }
    
    for(const str of rsp) {
        answer += mapper[str];
    }
    return answer;
}