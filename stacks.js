class StackDataType {
    constructor() {
      this.items = [];
      this.size = 20;
    }
  
    push(item) {
      if (this.items.length < this.size) {
        return this.items.push(item);
      }
      throw Error("Item is full");
    }
  
    pop() {
      if (this.items.length > 0) {
        return this.items.pop();
      }
      throw Error("Item is empty");
    }
  
    peek() {
      return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    isFull() {
      return this.items.length === this.size;
    }
  }
  
  function initStackDataType() {
    var stack = new StackDataType();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(stack.peek());
  
    stack.pop();
    console.log(stack.peek());
    stack.pop();
    stack.pop();
    console.log(stack.isEmpty());
  
    console.log(stack.isFull());
    for (let i = 0; i < 20; ++i) {
      stack.push(i);
    }
    console.log(stack.isFull());
  }
  
  initStackDataType();