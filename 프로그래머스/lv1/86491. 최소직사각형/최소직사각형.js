function solution(sizes) {
    var answer = 0;
    const arr = sizes.map((v) => {
        if(v[1] > v[0]) return [v[1], v[0]]
        else return [v[0], v[1]]
    })
    
    answer = Math.max(...arr.map((v) => v[0])) * Math.max(...arr.map((v) => v[1]))
    return answer;
}