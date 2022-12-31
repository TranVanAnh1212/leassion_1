// var fullName = "Tran Van Anh";
// var age = 19;

// alert(fullName);
// alert(age);

/**
 * ============ một số hàm Built-in ===============
 * alert: show hộp thoại trên màn hình web
 * console
 * confirm
 * promt
 * setTimeout( funtion( <doan code> ) {}, <khoang thoi gian(ms)>) : chay doan code sau 1 khoang thoi gian duoc an dinh
 * setInterval( funtion( <doan code> ) {}, <khoang thoi gian(ms)>) : thuc thi 1 doan code lien tuc sau 1 khoang thoi gian duoc an dinh
 * Math.random() : tạo random 1 dãy số nào đó
 */

// console.log(fullName);
// console.log(fullName + " " + age);

// confirm("Xac nhan ban du duoi!");

// prompt("xac nhan so tuoi cua ban!");

// setTimeout(function() {
//     alert("thong bao");
// }, 1000);

// setInterval( function() {
//     console.log("this is console log" + Math.random());
// }, 1000);

// ================== Toán Tử =================//

/**
 * Toán tử số học - Arithmetic
 * Toán tử gán - Assignment
 * Toán tử so sánh - Comparison
 * Toán tử logic - logical
 */

// var a = 12, b = -6;
// a /= 6;
// console.log(a);
// console.log(b);

/**
 * Toán tử ++/--
 * Prefix (tiền tố) && posfix (hậu tố)
 */

// var a = 2003;

// console.log("Gtri ban đầu:", a);
// console.log("======== Hậu Tố =========");
// // trả về giá trị của a trc khi ++
// console.log("Trả về:",a++); // khi nhận được lệnh thì sẽ in ra kq của biến a trc sau đó thực hiện toán tử tang thêm 1
// console.log("Sau khi thực thi:",a);   // sau đó sẽ in ra kq của biến a sau khi tăng thêm 1 và gán kq sau tăng vào a

// console.log("======== Tiền Tố =========");
// // trả về gtri cua a sau khi ++
// console.log("Trả về:", ++a); // khi nhận được lệnh thì sẽ tăng thêm biến a 1 đơn vị sau đó gán gtri vào a, và in ra màn hinh
// console.log("Sau khi thực thi:", a);   // sau đó sẽ in ra kq của biến a sau khi tăng thêm 1 và gán kq sau tăng vào a

// ============ Toán tử chuỗi - string operator ===============

// var firstName = "Tran";
// var lastName = "Anh";
// console.log(firstName + " " + lastName);

// var name = "Anh";
// name += " Tran";
// console.log(name);

// ================== Boolean =================
// var a = 12, b = 6;
// var isSuccess = a > b;
// console.log(isSuccess); // false

// ================== Kiểu dữ kiệu =================
/**
 * 1. Kiểu dữ liệu nguyên thủy - Primitive Data
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 *
 * 2. Dữ liệu phức tạp - Commplex Data
 * - function
 * - Object
 */

/*

var a = 1, b = 2, c = 1.5; // Number type
console.log(typeof a);

var fullName = "Tran Van Anh"; // String type
console.log(typeof fullName);

var isSuccess = true; // Boolean type
console.log(typeof isSuccess);

var age; // Undefined type: khai báo biến mà k gán gtri vao
console.log(typeof age);

var isNull = null; // null type: nothing
console.log(typeof isNull);

var id = Symbol("id"); //symbol type: unique: tính duy nhất
console.log(typeof id);

var myFunction = function() {
    alert("Hi. Xin Chao");
}
myFunction();
console.log(typeof myFunction);

var myObject = {
    // <key>: <Value>
    name: "Tran Van Anh",
    age: 18,
    address: "Thanh Hoa",
    myFunction: function() {

    }
};
console.log("myObject", myObject);
console.log(typeof myObject);

var myArray = [
    "Javascript", "PHP", "Ruby"
];
console.log(myArray);
console.log(typeof myArray);

*/

// ===================== Câu lệnh if - else ===============

// ===================== Hàm - Function ===================

// Đặt tên biến - Quy tắc
/**
 * chứa chữ cái a -> z, A -> Z, 0 ->9;
 * không được đăt sô ở đầu tiên
 */

// function showDialog(message) {
//     // code
//     alert(message)
// };

// showDialog("Test message");

// =================== Kiểu số (Number) =================
// gg search key: js number method

// var age = 19;
// var pi = 3.1415;

// var otherNumber = new Number(9); // tránh dùng từ khóa new

// var result = 20 / "abc";
// console.log(result);

// // toString: chuyển đổi số thành chuỗi
// console.log(age.toString());

// //toFixed:
// console.log(pi.toFixed(4));

//================== Array ====================
// // tao mot Array
// var Array_demo = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
// ];
// //hien thi mot Array
// console.log(Array_demo);

// xoa/cat/chen ptu moi vao mang
// Array_demo.splice(1, 1) // xoa
// Array_demo.splice(1, 0, "Dark", "Light") // chen

// // kiem tra kieu du lieu cua mang
// console.log(Array.isArray(Array_demo));

// // in ra chieu dai Array
// console.log(Array_demo.length);

// // lay ra gia tri theo index
// console.log(Array_demo[3]);

// // chuyen cac gtri trong mang thanh chuoi
// console.log(Array_demo.toString());
// console.log(typeof Array_demo.toString());

// // thay doi ki tu ngan cach cac chuoi
// console.log(Array_demo.join(";"));

// // pop() => hien thi ra ptu o cuoi mang va xoa nos ra khoi mang
// console.log(Array_demo.pop());

// // push() => them 1/nhieu ptu vao cuoi mang
// console.log(Array_demo.push("8", "9", "0"));
// console.log(Array_demo);

// // shift() => hien thi ra ptu o dau mang va xoa nos ra khoi mang
// console.log(Array_demo.shift());

// unshift() => them 1/nhieu ptu vao dau mang
// console.log(Array_demo.unshift("Daek", "Light"));

// var Array2 = [
//     9,
//     10
// ];

// // noi 2 mang voi nhau
// console.log(Array_demo.concat(Array2));

// // cat 1 vai/toan bo element cau mang va in ra mang do
// console.log(Array_demo.slice(0, 1));
// console.log(Array_demo.slice(0)); // copy toan bo mang

// ======================== Object in Js =========================

// var student_Key = "student";

// var my_Info = {
//     name: "Tran Van Anh",
//     age: 19,
//     address: "Thanh Hoa, Viet Nam",
//     [student_Key]: "student at HaUI",
//     get_Name: function() {
//         return this.name;
//     }
// };

// console.log(my_Info);

// console.log(my_Info[student_Key])

// them 1 key-value vao obj moi tao
// my_Info.email = "anh038953@gmail.com";

// // lay key-value ra khoi obj
// // mot key khong co trong obj thi tra ve undefine
// console.log(my_Info.name);

// // xoa di 1 key-value trong obj
// delete my_Info.age;

// console.log(my_Info.get_Name());

// ============== Object constructer ========================

// viet hoa cac chu cai dau cua Object constructer, khong bat buoc nhung la quy uoc chung
// function User(first_Name, last_Name, avatar) {
//     this.first_Name = first_Name;
//     this.last_Name = last_Name;
//     this.avatar = avatar;
//     this.get_Name = function () {
//         return `${this.first_Name} ${this.last_Name}`;
//     }
// }

// User.prototype.class_Name = "Fullstack"; // them 1 thuoc tinh vso Object
// User.prototype.get_Class_Name = function() {
//     return this.class_Name;
// }

// var author = new User("Anh", "Tran", "Avatar");
// var user = new User("Hang", "Duong", "Avatar");

// author.title = "hoc lap trinh web";
// user.comment = "Lieu co luong 140 tr :))";

// console.log(user.class_Name);
// console.log(user.get_Class_Name);

// =================== doi tuong date ===============

// var date = new Date();
// // or var date = Date(); => khong the truy xuat vao cac doi tuong Date

// console.log(date)

//====================== Math ================

// console.log(Math.PI); // tra ve gtri cua so pi
// console.log(Math.round(1.4748393496)); // lam tron 1 so thuc
// console.log(Math.abs(-4)); // tra ve gia tri tuyet doi
// console.log(Math.ceil(4.000000000001)); // lam tron tren
// console.log(Math.floor(4.9999999999)); // lam tron duoi
// console.log(Math.random()); // tao ra 1 so ngau nhien
// var random = Math.floor(Math.random() * 100);
// var c = 0;
// if (random < 5){
//     console.log("Success ! ");

// } else {
//     console.log("That bai ! ")
//     c++;
// }

// var Array = [
//     1, 2, 3, 4, 5, 6, 7
// ];

// for ( var i=0; i<Array.length; i++) {
//     console.log(Array[i]);
// }

// ================ đệ quy ====================

// function giai_Thua ( number ) {
//     var result = 1;
//     for ( var i = number; i > 0; i--) {
//         result *= i;
//     }

//     return result;
// }

// console.log(giai_Thua(5));

// function giaiThua_dequy(numb) {
//     if ( numb > 0) {
//         return numb*giaiThua_dequy(numb-1);
//     }
//     return 1;

// }

// console.log(giaiThua_dequy(5))
