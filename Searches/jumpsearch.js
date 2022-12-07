class JumpSearch {
  constructor(items) {
    this.items = items;
  }
  findItemIteratively(item) {
    let _size = this.items.length;
    let step = Math.sqrt(_size);
    let prev = 0;
    for (; this.items[Math.min(step, _size) - 1] < item; ) {
      prev = step;
      step += Math.sqrt(_size);
      if (prev >= _size) return -1;
    }
    for (; this.items[prev] < item; prev++) {
      if (prev == Math.min(step, _size)) return -1;
    }
    if (this.items[prev] == item) return { [prev]: item };
    return -1;
  }
}

function initJumpSearch() {
  var jumpSearch = new JumpSearch([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  console.log(jumpSearch.findItemIteratively(5));
}

initJumpSearch();
