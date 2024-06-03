function solution(myString, pat) {
    const newString = [...myString].map(v => v.toUpperCase()).join('');
    const newPat = [...pat].map(v => v.toUpperCase()).join('');
    return newString.includes(newPat) ? 1 : 0;
}