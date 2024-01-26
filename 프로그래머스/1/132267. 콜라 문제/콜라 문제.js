function solution(a, b, n) {
    var answer = 0;
    const reculsiveCola = (count) => {
        if(count < a) return 0;
        const getColaCount = Math.floor(count / a) * b
        return getColaCount + (reculsiveCola(getColaCount + count % a));
    }
    answer = reculsiveCola(n);
  
    return answer;
}

