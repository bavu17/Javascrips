/* BT JS 17/1*/
// 1. switch case
// 2. switch case + array
// 3. kiem tra so nguyen to
// 4. hien thi ma tran 2 chieu
// 5. ham kiem tra regex
// 6. doi email , pass => funtion
// 7. giao dien dang nhap
// 8. tao nut submit kiem  tra tong

// 1,2
var x = 5;
var y =["thu 2","thu 3","thu 4","thu 5","thu 6","thu 7","CN",];

switch (x) {
  case 0:
    console.log("thu 2");
    break;
  case 1: 
    console.log("thu 3");
    break;
  case 2:
    console.log("thu 4");
    break;
  case 3:
    console.log("thu 5");
    break;
  case 4:
    console.log("thu 6");
    break;
  case 5:
    console.log(y[x-1]);
    break;
  default:
    console.log("CN");
    break;
}

// 3. kiem tra so nguyen to
function kiemtra(number) {
  if (number <= 1) {
   return false;
  }

  for(let i = 2; i <= Math.sqrt(number); i++) {
   if (number % 1 === 0) {
     return false;
   }
  }
  return true;
}

const number = parseInt(prompt("nhap 1 so : "));
if(kiemtra(number)) {
 console.log(number + " la so nguyen to")
} else {
 console.log(number + " ko phai la so nguyen to")
} 

// 4. hien thi ma tran 2 chieu
const matran = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0, 0, 0]
];

for (let i = 0; i < matran.length; i++) {
  let row = '';
  for (let j = 0; j < matran[i].length; j++) {
    row += matran[i][j] + ' ';
  }
  console.log(row);
}



///5678
function login() {
  var email = emailInput.value;
  var password = passwordInput.value;

  if (email === "") {
    alert("Vui lòng nhập địa chỉ email!");
    return;
  }

  // Kiểm tra định dạng email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Địa chỉ email không đúng định dạng!");
    return;
  }

  if (password === "") {
    alert("Vui lòng nhập mật khẩu!");
    return;
  }

  // Xử lý đăng nhập ở đây
  if (email === "example@gmail.com" && password === "123456") {
    alert("Đăng nhập thành công!");
    emailInput.value = ""; // Xóa nội dung email
    passwordInput.value = ""; // Xóa nội dung mật khẩu
  } else {
    alert("Email hoặc mật khẩu không chính xác!");
    passwordInput.value = ""; // Xóa nội dung mật khẩu nếu không chính xác
  }
}

var emailInput = document.createElement("input");
emailInput.type = "text";
emailInput.placeholder = "Email";
document.body.appendChild(emailInput);

var passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Mật khẩu";
document.body.appendChild(passwordInput);

var loginButton = document.createElement("button");
loginButton.innerHTML = "Đăng nhập";
loginButton.addEventListener("click", login); // Gọi hàm login khi nhấp vào nút "Đăng nhập"
document.body.appendChild(loginButton);