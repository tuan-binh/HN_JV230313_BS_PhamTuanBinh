let str = " this is A tEst ";
let str2 = "     heLlo riKkei academy       ";
let arrStr = str2.split(" ");
let newArr = [];
for (let i = 0; i < arrStr.length; i++) {
  if (arrStr[i] !== "") {
    newArr.push(arrStr[i]);
  }
}
// console.log(newArr);
// biến mảng in hoa chữ cái đầu và xóa khoảng trắng
let html = "";
for (let i = 0; i < newArr.length; i++) {
  html +=
    newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1).toLowerCase() + " ";
}

console.log(html);
