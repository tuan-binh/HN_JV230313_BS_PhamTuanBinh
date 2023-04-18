let arr = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
let max = arr[0];
arr.forEach((e) => {
  if (max < e) {
    max = e;
  }
});
console.log("Giá trị lớn nhất là :", max);
