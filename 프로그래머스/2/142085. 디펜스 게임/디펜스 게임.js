function solution(n, k, enemy) {
    const lastRound = enemy.length;
    if(k >= lastRound) return lastRound;
    const minHeap = new MinHeap();
    let round = k;
    
    for(let i = 0; i < k; i++) minHeap.insert(enemy[i]);
    
    for(let i = k; i < lastRound; i++) {
        minHeap.insert(enemy[i]);
        n -= minHeap.pop();
        
        if(n < 0) break;
 
        round++;
    }
    
    return round;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(data) {
        this.heap.push(data);
        
        let current = this.size() - 1;
        let parent = Math.floor((current - 1) / 2);
        
        while(this.heap[current] < this.heap[parent]) {
            this.swap(current, parent);
            current = parent;
            parent = Math.floor((current - 1) / 2);
        }
    }
    
    peek() {
        return this.heap[0];
    }
    
    pop() {
        if(this.size() === 0) return undefined;
        this.swap(0, this.size() - 1);
        const min = this.heap.pop();
        
        let current = 0;
        let left = 1;
        let right = 2;
        
        while(left < this.size()) {
            let smallest = current;
            
            if(this.heap[left] < this.heap[smallest]) smallest = left;
            if(right < this.size() && this.heap[right] < this.heap[smallest]) smallest = right;
            if(smallest === current) break;
            
            this.swap(current, smallest);
            current = smallest;
            left = current * 2 + 1;
            right = current * 2 + 2;
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