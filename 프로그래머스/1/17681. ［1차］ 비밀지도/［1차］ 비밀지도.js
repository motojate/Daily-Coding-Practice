function solution(n, arr1, arr2) {
    var answer = [];
    const binaryNumArr = [];
    for(let i = 0; i < n; i++) {
        const binaryNumArr1 = convertBinaryNum(arr1[i].toString(2), n);
        const binaryNumArr2 = convertBinaryNum(arr2[i].toString(2), n);
        const orOperateNum = arr1[i] | arr2[i];
        binaryNumArr.push(convertBinaryNum(orOperateNum.toString(2), n));
    }
    binaryNumArr.forEach((data) => {
        answer.push(convertWall(data));
    })
    return answer;
}

const convertBinaryNum = (binaryNum, n) => {
    return "0".repeat(n - binaryNum.length) + binaryNum;
}

const convertWall = (str) => {
    const newString = str.replaceAll("1", "#");
    return newString.replaceAll("0", " ");
}