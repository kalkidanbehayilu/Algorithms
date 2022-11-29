const TYPE = {
  max: "MAX",
  min: "MIN",
};
class HeapDataType {
  constructor(type = TYPE.max) {
    console.log(`${type} Heap Data Type`);
    this.heap = [];
    this.maxSize = 20;
    this.type = type;
  }

  minHeapify(arr, n, i) {
    let smallest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    if (l < n && arr[l] < arr[smallest]) {
      smallest = l;
    }

    if (r < n && arr[r] < arr[smallest]) {
      smallest = r;
    }

    if (smallest != i) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;

      this.minHeapify(arr, n, smallest);
    }
  }

  maxHeapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }

    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }

    if (largest != i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;

      this.maxHeapify(arr, n, largest);
    }
  }

  appendHeap(num) {
    if (this.maxSize === this.heap.length) {
      throw Error("Item is full");
    }
    const size = this.heap.length;
    this.heap.push(num);
    if (size > 0) {
      for (let i = Math.floor(this.heap.length / 2 - 1); i >= 0; i--) {
        this.type === TYPE.max
          ? this.maxHeapify(this.heap, this.heap.length, i)
          : this.minHeapify(this.heap, this.heap.length, i);
      }
    }
  }

  removeHeap = (num) => {
    if (this.heap.length <= 0) {
      throw Error("Item is empty");
    }
    const size = this.heap.length;
    let i;
    for (i = 0; i < size; i++) {
      if (this.heap[i] === num) {
        break;
      }
    }
    this.swap(i, size - 1);
    this.heap.splice(size - 1);

    for (let i = Math.floor(this.heap.length / 2 - 1); i >= 0; i--) {
      this.type === TYPE.max
        ? this.maxHeapify(this.heap, this.heap.length, i)
        : this.minHeapify(this.heap, this.heap.length, i);
    }
  };

  swap(i, j) {
    let temp = this.heap[j];
    this.heap[j] = this.heap[i];
    this.heap[i] = temp;
  }

  extractItem() {
    const item = this.heap[0];
    this.removeHeap(item);
    return item;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  isFull() {
    return this.heap.length === this.maxSize;
  }
}

function initMaxHeapDataType() {
  let _heap = new HeapDataType(TYPE.max);
  _heap.appendHeap(1);
  _heap.appendHeap(2);
  _heap.appendHeap(3);
  _heap.appendHeap(4);
  console.log(_heap.heap);
  _heap.extractItem();
  console.log(_heap.heap);
  _heap.appendHeap(5);

  console.log(_heap.heap);
  _heap.removeHeap(5);

  console.log(_heap.heap);
}

initMaxHeapDataType();

console.log("");
console.log("");
console.log("");

function initMinHeapDataType() {
  let _heap = new HeapDataType(TYPE.min);
  _heap.appendHeap(1);
  _heap.appendHeap(2);
  _heap.appendHeap(3);
  _heap.appendHeap(4);
  console.log(_heap.heap);
  _heap.extractItem();
  console.log(_heap.heap);
  _heap.appendHeap(5);

  console.log(_heap.heap);
  _heap.removeHeap(5);

  console.log(_heap.heap);
}

initMinHeapDataType();
