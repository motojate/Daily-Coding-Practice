function solution(array) {
    const str = array.join('');
    return str.length - str.replaceAll('7', '').length;
}