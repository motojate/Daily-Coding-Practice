function solution(scoville, K) {
    var answer = 0;
    const minHeap = [null];
    
    for(const sco of scoville) {
        pushHeap(minHeap, sco);
    }
    
    while(peakHeap(minHeap) < K && minHeap.length >= 2) {
        const first = popHeap(minHeap);
        const second = popHeap(minHeap);
        pushHeap(minHeap, first + second * 2);
        answer++;
    }

    return peakHeap(minHeap) >= K ? answer : -1;
}

const pushHeap = (arr, value) => {
    arr.push(value);
    let curIdx = arr.length - 1;
    let parIdx = Math.floor(curIdx / 2);
    while(curIdx > 1 && arr[parIdx] > arr[curIdx]) {
        swap(arr, parIdx, curIdx);
        curIdx = parIdx;
        parIdx = Math.floor(curIdx / 2);
    }
}

const peakHeap = (arr) => {
    return arr[1];
}

const popHeap = (arr) => {
    if(arr.length === 2) return arr.pop();
    else {
        const min = arr[1];
        swap(arr, 1, arr.length - 1);
        arr.pop();
        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;
        while((arr[leftIdx] && arr[curIdx] > arr[leftIdx]) || (arr[rightIdx] && arr[curIdx] > arr[rightIdx])) {
            if(!arr[rightIdx]) {
                swap(arr, curIdx, leftIdx);
                curIdx = leftIdx;
                leftIdx = curIdx * 2;
                rightIdx = curIdx * 2 + 1;
            } else {
                const swapIdx = arr[leftIdx] < arr[rightIdx] ? leftIdx : rightIdx;
                swap(arr, curIdx, swapIdx);
                curIdx = swapIdx;
                leftIdx = curIdx * 2;
                rightIdx = curIdx * 2 + 1;
            }
        }
        
        return min;
    }
}


const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}