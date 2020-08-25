/*
Implement heap using min heap
 */

class MinHeap {
    constructor() {
        this.data = [];
    }

    insert(val) {
        this.data.push(val);
        this.checkUp(this.data.length - 1);
    }

    checkUp(index) {
        while (index > 0) {
            let parent = Math.floor((index + 1) / 2) - 1;

            if (this.data[parent] > this.data[index]) {
                let temp = this.data[parent];
                this.data[parent] = this.data[index];
                this.data[index] = temp;
            }
            index = parent;
        }
    }

    removeMin() {
        let min = this.data[0];
        this.data[0] = this.data.pop();
        this.checkDown();
        return min;
    }

    checkDown(index) {
        while (true) {
            let child = (index + 1) * 2;
            let sibling = child - 1;
            let toSwap = null;

            if (this.data[index] > this.data[child]) {
                toSwap = child;
            }

            if (this.data[index] > this.data[sibling] && (this.data[child] == null(this.data[child] !== null && this.data[sibling] < this.data[child]))) {
                toSwap = sibling;
            }

            if (toSwap == null) {
                break;
            }

            let temp = this.data[toSwap];
            this.data[toSwap] = this.data[index];
            this.data[index] = temp;

            index = toSwap;
        }
    }
}

let mHeap = new MinHeap();
mHeap.insert(5);
mHeap.insert(6);
mHeap.insert(4);
mHeap.insert(2);
mHeap.insert(1);
mHeap.insert(8);
mHeap