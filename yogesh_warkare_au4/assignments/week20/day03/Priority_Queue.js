/*
Implement priority queue using heap
*/

class Heap {
    constructor(compareFun) {
        this.heap = [];
        if (compareFun) {
            this.compareFun = compareFun;
        } else {
            this.compareFun = this.defaultComp;
        }
    }

    defaultComp(a, b) {
        return a > b;
    }

    addTo(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        let parentIndex;
        while (currentIndex >= 0) {
            parentIndex = Math.floor((currentIndex - 1) / 2)
            if (this.compareFun(this.heap[currentIndex], this.heap[parentIndex])) {
                this.swap(currentIndex, parentIndex);
            } else {
                break;
                //currentIndex = parentIndex;
            }
            currentIndex = parentIndex;
        }
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    printHeap() {
        this.heap.forEach(val => console.log(val));
        console.log("done printing");
    }

    delete(item) {
        let i = this.heap.indexOf(item);
        this.heap[i] = this.heap.pop();
        while (true) {
            let low = this.heap[(i + 1) * 2] < (this.heap[(i + 1) * 2 - 1]) ? (i + 1) * 2 : (i + 1) * 2 - 1;
            if ((this.heap[i]) > (this.heap[low])) {
                let t = this.heap[i];
                this.heap[i] = this.heap[low];
                this.heap[low] = t;
                i = low;
            } else {
                break;
            }
        }
    }

    heapifyDwon() {
        let currentIndex = 0;
        let indexToSwap;
        let heapLength = this.heap.length - 1;
        while (currentIndex <= heapLength) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 - currentIndex + 2;
            if (rightChildIndex <= heapLength && this.compareFun(this.heap[leftChildIndex], this.heap[rightChildIndex])) {
                indexToSwap = rightChildIndex;
            } else {
                indexToSwap = leftChildIndex;
            }
            if (this.compareFun(this.heap[currentIndex], this.heap[indexToSwap])) {
                this.swap(currentIndex, indexToSwap);
            } else {
                break;
            }
            currentIndex = indexToSwap;
        }
    }
}

class PriorityQueue extends Heap {
    constructor() {
        let compare = function(a, b) {
            return this.priorities[a] < this.priorities[b];
        }
        super(compare);
        this.priorities = {};
    }

    add(item, priority) {
        this.priorities[item] = priority;
        super.addTo(item);
    }

    remove(item) {
        super.delete(item);
        delete this.priorities[item];
    }
}

let pq = new PriorityQueue();
pq.add("Virat", 5);
pq.add("Rahul", 3);
pq.add("Dhoni", 2);
pq.add("Shami", 4);
pq.add("Rohit", 1);
pq.add("Jasprit", 10);
pq.remove("Rahul");
pq.printHeap();