function solution(my_string, overwrite_string, s) {
    const my_stringArr = my_string.split('');
    my_stringArr.splice(s, overwrite_string.length, ...overwrite_string);
    return my_stringArr.join('');
}