let arr = [3, 25, 38, 49, 12];
// Cách 1: sử dụng hàm sort()
arr.sort((a, b) => b - a);
console.log(arr);
// Cách 2: bubble sort
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
