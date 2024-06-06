function solution(binomial) {
    const [a, cal, b] = binomial.split(' ');
    switch(cal) {
        case '+':
            return +a + +b;
        case '-':
            return +a - +b;
        case '*':
            return +a * +b;
    }
}