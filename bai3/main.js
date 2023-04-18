let month = +prompt("Nhập vào tháng:");
let year = +prompt("Nhập vào năm:");

let isCheck = true;
while (isCheck) {
  if (month <= 0 || month > 12 || isNaN(month)) {
    month = +prompt("Nhập lại vào tháng: ");
  } else if (year <= 0 || isNaN(year)) {
    year = +prompt("Nhập lại vào năm: ");
  } else {
    isCheck = false;
  }
}

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  // năm nhuận
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert(`Tháng ${month} có 31 Ngày`);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert(`Tháng ${month} có 30 Ngày`);
      break;
    case 2:
      alert(`Tháng ${month} có 29 Ngày`);
      break;
  }
} else {
  // năm không nhuận
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert(`Tháng ${month} có 31 Ngày`);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert(`Tháng ${month} có 30 Ngày`);
      break;
    case 2:
      alert(`Tháng ${month} có 28 Ngày`);
      break;
  }
}
