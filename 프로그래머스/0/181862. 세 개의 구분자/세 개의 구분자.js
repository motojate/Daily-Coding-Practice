function solution(myStr) {
    const newStr = myStr.replaceAll('b', 'a').replaceAll('c', 'a').split('a');
    const answer = newStr.filter(v => v);
    
    return answer.length ? answer : ["EMPTY"];
}