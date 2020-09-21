class Iterator {
  constructor(list) {
    this.list = list;
  }
  next() {
    return this.list.shift();
  }

  hasNext() {
    if (this.list.length === 0) {
      return false;
    } else {
      return true;
    }
  }
}

let newIterator = new Iterator([1, 2, 3, 4]);
console.log(newIterator.next());
console.log(newIterator.next());

class flattenIterator {
  constructor(list) {
    this.list = list;
    this.currentIterator = this.list.shift();
  }

  next() {
    if (this.currentIterator.hasNext()) {
      return this.currentIterator.next();
    }
  }

  hasNext() {
    if (this.currentIterator === 0) {
      return false;
    } else {
      return true;
    }
  }
}

let flattenIteratorInstance = new flattenIterator([newIterator]);

console.log(flattenIteratorInstance.next());
console.log(flattenIteratorInstance.next());
console.log(flattenIteratorInstance.hasNext());
