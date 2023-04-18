let arr = [3, 25, 38, 49, 12];

// Cách 1: bubble sort
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
// Cách 2: selection sort
for (let i = 0; i < arr.length; i++) {
  let index = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] > arr[index]) {
      index = j;
    }
  }
  if (i !== index) {
    let temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
}
console.log(arr);
