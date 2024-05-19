function solution(arr, queries) {
    for(const query of queries) {
        const [i, j] = query;
        swap(arr, i, j);
    }
    return arr;
}

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}