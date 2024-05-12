function solution(str1, str2) {
    const newString = str1.replace(str2, '');
    return str1.length !== newString.length ? 1 : 2;
}