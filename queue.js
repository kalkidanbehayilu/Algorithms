class QueueDataType {
  constructor() {
    this.items = [];
    this.size = 20;
    this.rear = 0;
    this.front = 0;
  }

  enqueue(item) {
    if (this.rear < this.size) {
      ++this.rear;
      return this.items.push(item);
    }
    throw Error("Item is full");
  }

  dequeue() {
    if (this.rear != 0) {
      let item = this.items[this.front];
      this.items[this.front] = 0;
      ++this.front;
      return item;
    }
    throw Error("Item is empty");
  }

  peek() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  isFull() {
    return this.rear === this.size;
  }
}

function initQueueDataType() {
    var queue = new QueueDataType();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    console.log(queue.rear);
    console.log(queue.items);
    console.log(queue.dequeue());

    console.log(queue.peek());
    queue.enqueue(4);
    console.log(queue.items);


}

initQueueDataType();
