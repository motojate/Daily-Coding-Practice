function solution(my_string, queries) {
    const answer = [...my_string];
    for(const query of queries) {
        const [s, e] = query;
        const newArr = answer.slice(s, e + 1).reverse();
        for(let i = s; i <= e; i++) {
            answer[i] = newArr[i - s];
        }
    }

    return answer.join('');
}