const merge = (arr1, arr2) => {
  let res = [],
    a = 0;
  b = 0;
  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] < arr2[b]) {
      res.push(arr1[a]);
      a++;
    } else {
      res.push(arr2[b]);
      b++;
    }
  }
  if (arr1[a]) {
    let rem = arr1.slice(a);
    for (let i = 0; i < rem.length; i++) {
      res.push(rem[i]);
    }
  }
  if (arr2[b]) {
    let rem = arr2.slice(b);
    for (let i = 0; i < rem.length; i++) {
      res.push(rem[i]);
    }
  }
  return res;
};

let mergeSort = (arr) => {
  let d = arr.length;
  if (d <= 1) {
    return arr;
  }
  let midPos = Math.floor(d / 2);
  let leftArr = arr.slice(0, midPos);
  let bghtArr = arr.slice(midPos);
  return merge(mergeSort(leftArr), mergeSort(bghtArr));
};

let arr = [3, 6, 9, 12, 15, 18];
console.log(mergeSort(arr));
