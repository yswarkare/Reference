/**
 * Implement graph using adjacent list
 */

class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addNode(node) {
        this.adjList.set(node, []);
    }

    addEdge(node1, node2) {
        this.adjList.get(node1).push(node2);
        this.adjList.get(node2).push(node1);
    }
}

let nodes = [1, 2, 3, 4, 5];
let g = new Graph();
for (let vertices of nodes) {
    g.addNode(vertices);
}

g.addEdge(1, 2);
g.addEdge(1, 4);
g.addEdge(2, 3);
g.addEdge(2, 4);
g.addEdge(3, 4);
g.addEdge(3, 5);
g.addEdge(4, 5);
g