function solution(n, m, section) {
    var answer = 0;
    let colorWall = 0;
    
    for(let i = 0; i < section.length; i++) {
        if(colorWall >= section[i]) continue;
        colorWall = section[i] + m - 1;
        answer++;
    }
    
    return answer;
}
