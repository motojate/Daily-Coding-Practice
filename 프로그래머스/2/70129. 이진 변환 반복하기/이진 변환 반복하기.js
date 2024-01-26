const solution = (s) => reculsiveTransform(s, 0, 0);

const reculsiveTransform = (str, tryCount, zeroCount) => {
    if(str === "1") return [tryCount, zeroCount];
    else {
        const newStr = str.replaceAll("0", "");
        zeroCount += str.length - newStr.length;
        tryCount++;
        return reculsiveTransform(newStr.length.toString(2), tryCount, zeroCount);
    }
}