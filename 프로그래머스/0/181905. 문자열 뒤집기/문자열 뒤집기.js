function solution(my_string, s, e) {
    const changeStr = my_string.slice(s, e + 1);
    const strArr = my_string.split(changeStr);
    
    
    return strArr.join([...changeStr].reverse().join(''));
}