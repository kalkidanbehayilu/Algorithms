class LinearSearch {
  constructor(items) {
    this.items = items;
  }
  findItemIteratively(item) {
    for (let i = 0; i < this.items.length; ++i) {
      if (item === this.items[i]) {
        return { [i]: item };
      }
    }
    return -1;
  }

  findItemRecursively(item, i = 0) {
    if (i === this.items.length) {
      return -1;
    } else if (item === this.items[i]) {
      return { [i]: item };
    }
    let data = this.findItemRecursively(item, ++i);
    return data;
  }
}

function initLinearSearch() {
  var linearSearch = new LinearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  console.log(linearSearch.findItemIteratively(5));
  console.log(linearSearch.findItemRecursively(6));
}

initLinearSearch();
