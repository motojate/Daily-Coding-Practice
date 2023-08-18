function solution(number) {
    var answer = 0;
    answer = getCombinations(number, 3).map((arr) => arr.reduce((acc, cur) => acc + cur, 0)).filter((v) => v === 0).length

    return answer;
}

function getCombinations(arr, selectCount) {
    if (selectCount === 0) {
        return [[]];
    }

    if (arr.length === 0) {
        return [];
    }

    const firstElement = arr[0];
    const restOfElements = arr.slice(1);

    const combinationsWithoutFirst = getCombinations(restOfElements, selectCount);
    const combinationsWithFirst = getCombinations(restOfElements, selectCount - 1).map(combination => [firstElement, ...combination]);

    return [...combinationsWithoutFirst, ...combinationsWithFirst];
}