function solution(book_time) {
    book_time.sort((a, b) => a[0].localeCompare(b[0]));
    
    const room = new MinHeap();
    
    for(const [start, end] of book_time) {
        const startMinute = generateMinute(start);
        const endMinute = generateMinute(end);
        if(room.length === 0) room.insert(endMinute);
        else {
            if(room.peek() + 10 <= startMinute) room.pop();
            room.insert(endMinute);
        }
    }
    
    return room.size();
}

const generateMinute = (str) => {
    const [hour, minute] = str.split(':').map(Number);
    return hour * 60 + minute;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    insert(data) {
        this.heap.push(data);
        
        let current = this.heap.length - 1;
        let parent = Math.floor((current - 1) / 2);
        
        while(parent >= 0 && (this.heap[current] < this.heap[parent])) {
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
        
        this.swap(0, this.heap.length - 1);
        
        const min = this.heap.pop();
        
        let current = 0;
        let left = current * 2 + 1;
        let right = current * 2 + 2;
        
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
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

}