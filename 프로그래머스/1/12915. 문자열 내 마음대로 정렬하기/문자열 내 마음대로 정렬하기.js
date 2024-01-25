function solution(strings, n) {
    var answer = [];
    const sortArr = strings.sort().map((val, idx) => [val[n], idx]).sort((a, b) => a[0].localeCompare(b[0])).forEach((data) => {
        answer.push(strings[data[1]]);
    });
    
    
    
   
    return answer;
}