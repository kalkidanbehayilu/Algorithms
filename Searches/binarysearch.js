class BinarySearch {
  constructor(items) {
    this.items = items;
  }
  findItemIteratively(item) {
    for (let start = 0, end = this.items.length - 1; start <= end; ) {
      let middle = Math.floor((start + end) / 2);
      if (this.items[middle] === item) {
        return { [middle]: item };
      } else if (this.items[middle] < item) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
    return -1;
  }

  findItemRecursively(item, start = 0, end = this.items.length - 1) {
    let middle = Math.floor((start + end) / 2);
    if (this.items[middle] === item) {
      return { [middle]: item };
    } else if (start === end) {
      return -1;
    } else if (this.items[middle] < item) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    let data = this.findItemRecursively(item, start, end);
    return data;
  }
}

function initBinarySearch() {
  var binarySearch = new BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  console.log(binarySearch.findItemIteratively(5));
  console.log(binarySearch.findItemRecursively(9));
}

initBinarySearch();
