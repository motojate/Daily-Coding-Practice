function solution(arr) {
    if(arr.length === arr[0].length) return arr;
    if(arr.length > arr[0].length) {
        for(let i = 0; i < arr.length; i++) {
            const count = arr.length - arr[i].length;
            for(let j = 0; j < count; j++) {
                arr[i].push(0)
            }
        }
    } else {
        const count = arr[0].length - arr.length;
        for(let i = 0; i < count; i++) {
            arr.push(Array.from({ length: arr[0].length }).fill(0));
        }
    }
    return arr;
}