class InterpolationSearch {
  constructor(items) {
    this.items = items;
  }
  findItemRecursively(item, low = 0, high = this.items.length - 1) {
    let pos;

    if (low <= high && item >= this.items[low] && item <= this.items[high]) {
      pos =
        low +
        Math.floor(
          ((high - low) / (this.items[high] - this.items[low])) *
            (item - this.items[low])
        );
      if (this.items[pos] == item) {
        return { [pos]: item };
      }
      if (this.items[pos] < item) {
        return findItemRecursively(item, pos + 1, high);
      }
      if (this.items[pos] > item) {
        return findItemRecursively(item, low, pos - 1);
      }
    }
    return -1;
  }
}
function initInterpolationSearch() {
  var interpolationSearch = new InterpolationSearch([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);

  console.log(interpolationSearch.findItemRecursively(5));
}

initInterpolationSearch();
