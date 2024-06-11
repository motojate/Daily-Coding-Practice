function solution(operations) {
    const minHeap = new MinHeap();
    const maxHeap = new MaxHeap();
    
    for(const operation of operations) {
        const [op, data] = operation.split(' ');
        
        if(op === 'I') {
            minHeap.insert(+data);
            maxHeap.insert(+data);
        } else {
            if(minHeap.size() === 0) continue;
            
            if(+data === 1) {
                maxHeap.pop();
                minHeap.reset();
                for(const heapData of maxHeap.heap) {
                    minHeap.insert(heapData);
                }
            } else {
                minHeap.pop();
                maxHeap.reset();
                for(const heapData of minHeap.heap) {
                    maxHeap.insert(heapData);
                }
            }
        }
    }
    if(minHeap.size() === 0 && maxHeap.size() === 0) return [0, 0];
    else return [maxHeap.pop(), minHeap.pop()];
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(data) {
        this.heap.push(data);
        let current = this.heap.length - 1;
        let parent = Math.floor((current - 1) / 2);
        while(this.heap[current] < this.heap[parent]) {
            this.swap(current, parent);
            current = parent;
            parent = Math.floor((current - 1) / 2);
        }
    }
    
    pop() {
        this.swap(0, this.heap.length - 1);
        const value = this.heap.pop();
        
        let current = 0;
        let left = current * 2 + 1;
        let right = current * 2 + 2;
        while(this.heap[current] > this.heap[left] || this.heap[current] > this.heap[right]) {
            if(this.heap[left] < this.heap[right]) {
                this.swap(current, left);
                current = left;
            } else {
                this.swap(current, right);
                current = right;
            }
            left = current * 2 + 1;
            right = current * 2 + 2;
        }
        
        return value;
    }
    
    size() {
        return this.heap.length;
    }
    
    reset() {
        this.heap = [];
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(data) {
        this.heap.push(data);
        let current = this.heap.length - 1;
        let parent = Math.floor((current - 1) / 2);
        while(this.heap[current] > this.heap[parent]) {
            this.swap(current, parent);
            current = parent;
            parent = Math.floor((current - 1) / 2);
        }
    }
    
    pop() {
        this.swap(0, this.heap.length - 1);
        const value = this.heap.pop();
        
        let current = 0;
        let left = current * 2 + 1;
        let right = current * 2 + 2;
        while(this.heap[current] < this.heap[left] || this.heap[current] < this.heap[right]) {
            if(this.heap[left] > this.heap[right]) {
                this.swap(current, left);
                current = left;
            } else {
                this.swap(current, right);
                current = right;
            }
            left = current * 2 + 1;
            right = current * 2 + 2;
        }
        
        return value;
    }
    
    size() {
        return this.heap.length;
    }
    
    reset() {
        this.heap = [];
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}