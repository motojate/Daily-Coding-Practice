function solution(myString, pat) {
    let answer = 0;
    const patL = pat.length;
    for(let i = 0; i <= myString.length - patL; i++) {
        if(pat === myString.slice(i, i + patL)) answer++;
    }
    return answer;
}