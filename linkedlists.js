
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
      this.maxSize = 20;
    }
  
    insertData(data) {
      if (this.size === this.maxSize) {
        throw Error("Item is full");
      }
      var node = new LinkedListNode(data);
      var current;
      if (this.head == null) this.head = node;
      else {
        current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.size++;
    }
  
    insertDataByIndex(data, index) {
      if (this.size === this.maxSize) {
        throw Error("Item is full");
      }
      if (this.size < index) {
        throw Error("Index is larger");
      }
      if (this.size === index) {
        return this.insertData(data);
      }
      var node = new LinkedListNode(data);
      var parent = this.head;
      var current = this.head;
      var count = 0;
      while (current.next && count < index) {
        ++count;
        parent = current;
        current = current.next;
      }
      node.next = current;
      parent.next = node;
      this.size++;
    }
  
    removeLastElement() {
      if (this.size == 0) {
        throw Error("Item is empty");
      }
      let current = this.head;
      let parent = null;
      while (current.next) {
        parent = current;
        current = current.next;
      }
      parent.next = null;
    }
  
    removeData(data) {
      if (this.size === 0) {
        throw Error("Item is empty");
      }
      var current = this.head;
      var parent = null;
  
      while (current != null) {
        if (current.data === data) {
          if (parent == null) {
            this.head = current.next;
          } else {
            parent.next = current.next;
          }
          this.size--;
          return current.data;
        }
        parent = current;
        current = current.next;
      }
      return -1;
    }
  
    isEmpty() {
      return this.size === 0;
    }
    isFull() {
      return this.size === this.maxSize;
    }
  }
  
  class LinkedListNode {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  function initLinkedListDataType() {
    let linkedList = new LinkedList();
    for (let i = 0; i < 5; ++i) {
      linkedList.insertData(i + 1);
    }
    linkedList.removeLastElement();
    linkedList.insertDataByIndex(3.2, 0);
    // console.log(linkedList);
  
    // linkedList.removeData(5);
  
    // console.log(linkedList);
  
    // for (let i = 0; i < 4; ++i) {
    //   linkedList.removeData(i + 1);
    // }
  
    // console.log(linkedList.isEmpty());
  
    // linkedList.removeData(100);
  
    // for (let i = 0; i < 20; ++i) {
    //   linkedList.insertData(i + 1);
    // }
  
    // console.log(linkedList.isFull());
  
    var current = linkedList.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  
    // linkedList.insertData(21);
  }
  
  initLinkedListDataType();