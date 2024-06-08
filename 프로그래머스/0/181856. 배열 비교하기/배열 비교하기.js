function solution(arr1, arr2) {
    if(arr1.length === arr2.length) {
        const arr1Sum = arr1.reduce((acc, item) => acc + item, 0);
        const arr2Sum = arr2.reduce((acc, item) => acc + item, 0);
        if(arr1Sum > arr2Sum) return 1;
        if(arr1Sum < arr2Sum) return -1;
        if(arr1Sum === arr2Sum) return 0;
    } else {
        return arr1.length > arr2.length ? 1 : -1
    }
}