function solution(quiz) {
    return quiz.map(v => {
        const circ = v.split(' ');
        if(circ[1] === '+') return +circ[0] + +circ[2] === +circ[4] ? 'O' : 'X';
        else return +circ[0] - +circ[2] === +circ[4] ? 'O' : 'X';
    });
}