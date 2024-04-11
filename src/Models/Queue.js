import { Nodo } from "./Nodo.js";
export class Queue {
  constructor() {
    this.count = 0;
    this.head = null;
    this.front = null;
  }
  enqueue(nombre, numero) {
    const nodo = new Nodo({ nombre, numero });
    this.count++;
    if (this.isEmpty()) {
      this.front = nodo;
      this.head = nodo;
      return;
    }
    this.head.next = nodo;
    this.head = nodo;
  }

  dequeue() {
    if (this.isEmpty()) {
        return null;
    }
    let value = this.front;
    this.front = this.front.next;
    this.count--;

    if (this.isEmpty()) {
        this.head = null;
    }
    return value.getData();
}


  peek() {
    let current = this.front.getData();
    return current;
  }
  isEmpty() {
    return this.head === null;
  }
  size() {
    return this.count;
  }
}
