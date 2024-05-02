function solution(genres, plays) {
    var answer = [];
    const genresMap = {};
    for(let i = 0; i < genres.length; i++) {
        const genresMapData = genresMap[genres[i]];
        if(genresMapData) {
            genresMap[genres[i]].count += plays[i];
            genresMap[genres[i]].data.push({ play: plays[i], idx: i })
        } else {
            genresMap[genres[i]] = {
                count: plays[i],
                data: [{ play: plays[i], idx: i }]
            }
        }
    }
    
    const newArr = Object.entries(genresMap).sort((a, b) => b[1].count - a[1].count)
    
    newArr.forEach(v => {
        v[1].data.sort((a, b) => b.play - a.play).forEach((val, i) => {
            if(i <= 1) answer.push(val.idx);
        })
    });
    
    return answer;
}