const insertionSort = (arr) => {
  let l = arr.length;
  for (let a = 1; a < l; a++) {
    let key = arr[a];
    let h = a - 1;
    while (h >= 0 && arr[h] > key) {
      arr[h + 1] = arr[h];
      h = h - 1;
    }
    arr[h + 1] = key;
  }
  console.log(arr);
};

let arr = [1, 3, 6, 9, 12, 15];
insertionSort(arr);
