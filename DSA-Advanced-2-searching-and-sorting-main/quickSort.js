const partition = (arr, f, w) => {
  let pivot = arr[f];
  let a = f,
    v = w;
  do {
    do {
      a++;
    } while (arr[a] <= pivot);
    do {
      v--;
    } while (arr[v] > pivot);
    if (a < v) {
      let temp = arr[a];
      arr[a] = arr[v];
      arr[v] = temp;
    }
  } while (a < v);
  let temp = arr[v];
  arr[v] = arr[f];
  arr[f] = temp;
  return v;
};

const quickSort = (arr, f, w) => {
  let v;
  if (f < w) {
    v = partition(arr, f, w);
    quickSort(arr, f, v);
    quickSort(arr, v + 1, w);
  }
};

let arr = [3, 6, 9, 12, 15, 18];
quickSort(arr, 0, arr.length);
console.log(arr);
