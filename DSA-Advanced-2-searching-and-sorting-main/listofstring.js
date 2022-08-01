function sortarrayString(arr) {
  for (var a = 0; a < arr.length; a++) {
    for (var b = a + 1; b < arr.length; b++) {
      if (arr[a] > arr[b]) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
      }
    }
  }
  return arr;
}
var arr = [
  "kawasaki",
  "susuki",
  "bajaj",
  "yamaha",
  "mahindra",
  "tata",
  "nexa",
  "mg",
];
console.log("input string:");
console.log(arr);
console.log("output sorted:");
console.log(sortarrayString(arr));
