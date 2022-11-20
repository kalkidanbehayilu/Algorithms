class ArrayDataType extends Array {}

function initArrayDataType() {
  // Java sctipt is dynamic data type programming language
  // meaning we can define attributes or manipulated data beside having to worry
  // about the data types or memory allocation
  var a = new ArrayDataType(1, 2, 3, 4);

  a.push(5); // Insert new item to the array
  console.log(a);

  a.pop(); // This will pop or discard the last value added
  console.log(a);

  console.log(a.length); // Data length
}

initArrayDataType(); // Initialize array data type

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


class User {
    constructor(){
        this.firstName = '';
        this.lastName = '';
        this.age = 0;

        this.address = [];
    }
}

function initUserAbstractDataType(){
    var user1 = new User();

    user1.firstName = 'Ayele';
    user1.lastName = 'Kebede';
    user1.age = 20;
    user1.address = ['Bole', 'Shegole', 'Koye feche'];

    console.log(user1);


    var user2 = new User();

    user2.firstName = 'Tola';
    user2.lastName = 'Lola';
    user2.age = 30;
    user2.address = ['Finfine'];

    console.log(user2);
}

initUserAbstractDataType();