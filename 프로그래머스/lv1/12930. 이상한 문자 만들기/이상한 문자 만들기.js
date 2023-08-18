function solution(s) {
    var answer = '';
    answer = s.split(' ').map((v) => {
        let str = ''
        for(let i = 0; i < v.length; i++) {
            if(i % 2 === 0) str += v[i].toUpperCase()
            else str += v[i].toLowerCase()
        }
        return str
    }).join(' ')
    return answer;
}