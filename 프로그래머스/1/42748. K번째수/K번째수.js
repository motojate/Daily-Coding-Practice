function solution(array, commands) {
    var answer = [];
    commands.forEach((data) => {
        const newArr = array.slice(data[0] - 1, data[1]).sort((a, b) => Number(a) - Number(b));
       
        answer.push(newArr[data[2] - 1]);
    })
  
    return answer;
}