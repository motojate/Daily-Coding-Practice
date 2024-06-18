function solution(queue1, queue2) {
    const minHeap1 = new MinHeap();
    const minHeap2 = new MinHeap();    
    
    let { sum1, sum2 } = queue1.reduce((acc, item, idx) => {
        const q1 = { idx, value: item };
        const q2 = { idx, value: queue2[idx] };
        minHeap1.insert(q1);
        minHeap2.insert(q2)
        acc.sum1 += q1.value;
        acc.sum2 += q2.value;
        return acc;
    }, { sum1: 0, sum2: 0 });
    const sum = (sum1 + sum2) / 2;
    
    let count = 0;
    
    while(true) {
        if(count >= queue1.length * 2 + 5) return -1;
        if(sum1 === sum) break;
        
        count++;
        
        if(sum1 > sum) {
            const data = minHeap1.pop();
            data.idx = minHeap2.getLastIdx() + 1;
            minHeap2.insert(data);
            sum1 -= data.value;
            sum2 += data.value;
        } else {
            const data = minHeap2.pop();
            data.idx = minHeap1.getLastIdx() + 1;
            minHeap1.insert(data);
            sum2 -= data.value;
            sum1 += data.value;
        }
        
        if(sum1 === 0 || sum2 === 0) return -1;
    }
    return count;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    getLastIdx() {
        return this.heap[this.size() - 1].idx;
    }
    
    insert(data) {
        this.heap.push(data);
        let current = this.heap.length - 1;
        let parent = Math.floor((current - 1) / 2);
        
        while(parent >= 0 && (this.heap[parent].idx > this.heap[current].idx)) {
            this.swap(current, parent);
            current = parent;
            parent = Math.floor((current - 1) / 2);
        }
    }
    
    pop() {
        if(this.size() === 0) return undefined;
        
        this.swap(0, this.heap.length - 1);
        
        const min = this.heap.pop();
        let current = 0;
        let left = current * 2 + 1;
        let right = current * 2 + 2;
        
        while (left < this.size()) {
            let smallest = current;
            
            if(this.heap[left].idx < this.heap[smallest].idx) smallest = left;
            if(right < this.size() && this.heap[right].idx < this.heap[smallest].idx) smallest = right;
            if(smallest === current) break;
            
            this.swap(current, smallest);
            current = smallest;
            left = 2 * current + 1;
            right = 2 * current + 2;
        }
        
        return min;
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
}
