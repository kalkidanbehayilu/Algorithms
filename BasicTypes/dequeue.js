class DeQueueDataType {
  constructor() {
    this.items = [];
    this.size = 20;
    this.rear = 0;
    this.front = 0;
  }

  frontEnqueue(item) {
    if (this.front < this.size) {
      ++this.front;
      ++this.rear;
      return this.items.unshift(item);
    }
    throw Error("Item is full");
  }

  frontDequeue() {
    if (this.rear < this.size && this.front != 0) {
      var item = this.items[0];
      this.items.splice(0,1);
      --this.front;
      --this.rear;
      return item;
    }
    throw Error("Item is empty");
  }

  rearEnqueue(item) {
    if (this.rear < this.size) {
      ++this.rear;
      return this.items.push(item);
    }
    throw Error("Item is full");
  }

  rearDequeue() {
    if (this.rear < this.size && this.rear != 0) {
      let item = this.items[this.rear - 1];
      this.items.splice(this.rear - 1, 1);
      --this.rear;
      return item;
    }
    throw Error("Item is empty");
  }

  peekFront() {
    return this.items[0];
  }

  peekRear() {
    return this.items[this.rear + this.front];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  isFull() {
    return this.rear === this.size;
  }
}

function initDeQueueDataType() {
  var queue = new DeQueueDataType();
  queue.frontEnqueue(1);
  queue.frontEnqueue(2);

  console.log(queue.items);


  queue.rearEnqueue(3);
  queue.rearEnqueue(4);

  console.log(queue.items);

  console.log(queue.frontDequeue());
  console.log(queue.items, queue.front, queue.rear);

  console.log(queue.rearDequeue());
  console.log(queue.items, queue.rear, queue.front);

  queue.rearEnqueue(5);
  queue.rearEnqueue(6);

  console.log(queue.items, queue.rear, queue.front);

}

initDeQueueDataType();
