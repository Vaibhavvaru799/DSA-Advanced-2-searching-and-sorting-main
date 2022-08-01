const binarySearch = (arr, key) => {
  let a = 0,
    b = arr.length - 1,
    c;
  while (a <= b) {
    c = parseInt((a + b) / 2);
    if (arr[c] == key) {
      console.log(
        `element ${key} is found at position ${c} in given array [${arr}]`
      );
      return c;
    } else if (arr[c] > key) {
      b = c - 1;
    } else {
      a = c + 1;
    }
  }
  return "element not found";
};

console.log(binarySearch([3, 2, 5, 7], 10));
