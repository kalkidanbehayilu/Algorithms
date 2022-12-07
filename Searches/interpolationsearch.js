class InterpolationSearch {
  constructor(items) {
    this.items = items;
  }

  findItemIteratively(item) {
    let mid, low = 0, high = this.items.length - 1;
    for (;low <= high && item >= this.items[low] && item <= this.items[high];) {
      mid = this.getSlope(item, low, high);
      if (this.items[mid] == item) {        
        return { [mid]: item };
      }
      if (this.items[mid] < item) {
        low = mid + 1;
      }
      if (this.items[mid] > item) {
        high = mid - 1;
      }
    }
    return -1;
  }

  findItemRecursively(item, low = 0, high = this.items.length - 1) {
    let mid;

    if (low <= high && item >= this.items[low] && item <= this.items[high]) {
      mid = this.getSlope(item, low, high);
      if (this.items[mid] == item) {
        return { [mid]: item };
      }
      else if (this.items[mid] < item) {
        low = mid +1;
      } else {
        high = mid - 1;
      }
      return findItemRecursively(item, low, high);
    }
    return -1;
  }

  getSlope(item, low, high){
    return low + Math.floor(((high - low) / (this.items[high] - this.items[low])) * (item - this.items[low]));
  }
}
function initInterpolationSearch() {
  var interpolationSearch = new InterpolationSearch([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);

  console.log(interpolationSearch.findItemIteratively(3));

  console.log(interpolationSearch.findItemRecursively(5));
}

initInterpolationSearch();
