const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class Element {
  constructor(number, frequency, sequenceNumber) {
    this.number = number;
    this.frequency = frequency;
    this.sequenceNumber = sequenceNumber;
  }

  compare(other) {
    // higher frequency wins
    if (this.frequency !== other.frequency) {
      return this.frequency - other.frequency;
    }
    // if both elements have same frequency, return the element that was pushed later
    return this.sequenceNumber - other.sequenceNumber;
  }
}

class FrequencyStack {
  constructor() {
    this.sequenceNumber = 0;
    this.frequencyMap = {};
    this.maxHeap = new Heap([], null, (a, b) => a.compare(b));
  }

  push(num) {
    if (!(num in this.frequencyMap)) {
      this.frequencyMap[num] = 1;
    } else {
      this.frequencyMap[num]++;
    }
    this.maxHeap.push(
      new Element(num, this.frequencyMap[num], this.sequenceNumber)
    );
    this.sequenceNumber += 1;
  }

  pop() {
    const num = this.maxHeap.pop().number;
    // decrement the frequency or remove if this is the last number
    if (this.frequencyMap[num] > 1) {
      this.frequencyMap[num] -= 1;
    } else {
      delete this.frequencyMap[num];
    }

    return num;
  }
}

const frequencyStack = new FrequencyStack();
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(3);
frequencyStack.push(2);
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(5);
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
