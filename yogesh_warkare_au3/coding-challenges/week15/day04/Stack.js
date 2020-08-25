class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }
    push(item) {
        this.items.push(item)
        this.count++
    }
    pop() {
        if (this.count > 0) {
            this.count--
        }
        return this.items.pop()
    }
    getLength() {
        return this.count
    }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.getLength());