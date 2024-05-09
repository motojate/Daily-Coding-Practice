function solution(my_string) {
    const strArr = my_string.split(' ');
    let temp = 0;
    while(strArr.length > 0) {
        const num = strArr.shift();
        if(num === '+' || num === '-') {
            const num2 = strArr.shift();
            if(num === '+') {
                temp += +num2;
            } else {
                temp -= +num2;
            }
        } else temp = +num;
    }
    return temp;
}