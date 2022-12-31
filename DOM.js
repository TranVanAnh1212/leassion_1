/**
 *  HTML DOM (Document Object Model)
 *  là quy chuẩn của W3C (world wide web Contiturm)
 * vói mọi web dev
 *  có 3 thành phần
 * 1. elements: mỗi thẻ tag là 1 element.
 * 2. attribute: class, href, title, id...
 * 3. text: nội dung viết trong thẻ tag.
 */

// ____________________________________

/**
 * Document Object
 */

//_____________________________________

/**
 * get element method
 * get qua ID, class, tag name, CSS selector,
 * HTML collection..
 *
 */
// var headingNode = document.getElementById("heading");
// console.log(headingNode);

// var headingNodes = document.getElementsByClassName("headingClass");
// console.log(headingNodes);

// var headingNodes = document.getElementsByTagName("h1");
// console.log(headingNodes);

// var headingNode = document.querySelector(".headingClass");
// var headingNode = document.querySelector(".box .heading-2");
// console.log(headingNode);

// var boxNode = document.querySelector(".box-1");

// // Cv 1: Sử dụng tói boxNode
// console.log(boxNode);

// //Cv 2: Sử dụng đến các li là con của .box-1
// console.log(boxNode.querySelector("li"));

// var boxNodes = document.querySelectorAll(".box-1");
// for (var i = 0; i < boxNodes.length; i++) {
//   console.log(boxNode[i].querySelector("li"));
// }

// DOM Attribute ==============

// var headingElement = document.querySelector("h1");
// console.log(headingElement);

// // Them Attribute vao 1 Element
// headingElement.title = "heading";
// headingElement.id = "headingID";
// headingElement.className = "headingClass";

// var headingH1 = document.querySelector("h1");
// headingH1.title = "F8 - Học lập trình để đi làm";
// headingH1.setAttribute(
//     "data-title", "F8 - Học lập trình để đi làm"
// )

// var addAttributeForA = document.querySelector('a');
// addAttributeForA.href = "https://fullstack.edu.vn/";
// addAttributeForA.target = "_blank";

/**
 * InnerText vs textContent Property =========
 * innerText: noi dung lay duocj giong noi dung thay duoc tren trinh duyet
 * TextContent: tra ve noi dung text thực trong thẻ tag,
 */

// var headingElement = document.querySelector(".heading");

// // show Text in h1 tag ( use getter )
// console.log(headingElement.innerText);
// console.log(headingElement.textContent);

// // change Text in h1 tag ( use setter )
// console.log((headingElement.innerText = "new heading"));
// console.log(headingElement);

/**
 * InnerHTML vs OuterHTML Property ============
 */

// var boxElement = document.querySelector(".box");

// boxElement.innerHTML = '<h1 title = "Heading">Heading</h1>';
// console.log(boxElement.innerHTML);
// console.log(document.querySelector("h1").innerText);

// function render(html) {
//   return (document.querySelector(".box").innerHTML = html);
// }

// render(`
//     <li>Khóa học HTML</li>
//     <li>Khóa học JS</li>
//     <li>Khóa học PHP</li>
// `);

/**
 * Thực hành sử dụng InnerHTML #2
Cập nhật tháng 6 năm 2022
Ở bài trước chúng ta đã tạo hàm render để thực hiện chèn 
1 đoạn text HTML vào thẻ ul. 
Trong bài này chúng ta cùng làm 1 thử thách khó hơn nhé.
Các bạn hãy viết hàm render có 1 tham số courses,
 hàm render sẽ thêm các item của mảng courses 
 để tạo thành 1 danh sách các khóa học trên giao diện.
Ví dụ: Với mảng 
var courses = ['ReactJS', 'AngularJS', 'VueJS'] 
sẽ thu được kết quả:
ReactJS
AngularJS
VueJS
Gợi ý:
Sử dụng phương thức map kết hợp với join để tạo chuỗi HTML từ mảng courses.
Gán chuỗi HTML vừa tạo vào thuộc innerHTML của thẻ ul giống bài trước nhé.
 */

//================

// var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];
// function render(coursess) {
//   var coursesJoin = courses.map((course, index) => {
//     return `<h1>${course}</h1>`;
//   });
//   return (document.querySelector(".box").innerHTML = coursesJoin.join("\n"));
// }
// render(courses);

// DOM CSS ===================
// var boxElement = document.querySelector(".box");
// boxElement.style.width = "100px";
// boxElement.style.height = "200px";
// boxElement.style.backgroundColor = "red";

// //viết gọn
// //chỉ có thể css in line
// Object.assign(boxElement.style, {
//   width: "100px",
//   height: "200px",
//   backgroundColor: "green",
// });
// // get ra giá trị thuộc tính css in line, mà không phải
// // lấy ra thuộc tính của đối tượng
// console.log(boxElement.style.width);

// ClassList Property ====================
/**
 * Quản lý class element
 * add: thêm class vào element
 * contains: ktra 1 class có nằm trong element hay không
 * remove: xóa 1 class khỏi element
 * toggle: nếu đáng có 1 class trong element -> xóa class khỏi element
 * nếu k -> thêm vào 1 class
 */

// var boxElement = document.querySelector(".box");

// boxElement.classList.add("red", "blue", "green");
// console.log(boxElement.classList.contains("black"));

// setTimeout(() => {
//   boxElement.classList.remove("red", "blue", "green");
// }, 3000);

// setInterval(() => {
//   boxElement.classList.toggle("red");
// }, 500);

// ==============
// var boxElement = document.querySelectorAll("div");
// boxElement.forEach((box, index) => {
//   box.classList.add("box");
// });

// DOM EVENT =====================
/**
 * 1. attribute event
 * 2. assign event using the element node
 */
// var h1Element = document.querySelectorAll("h1");
// cách 1:
// h1Element.forEach((element) => {
//   element.onclick = (e) => {
//     console.log(e.target);
//   };
// });

// Cách 2:
// var eleLength = h1Element.length;
// for (var i = 0; i < eleLength; i++) {
//   h1Element[i].onclick = (e) => {
//     console.log(e.target);
//   };
// }

// DOM EVENTs <Continue> =============
/**
 * 1. input / select
 * 2. Key up / down
 */
// var inputEleText = document.querySelector("input[type='Text']");
// var inputValue;
// inputEleText.onchange = (e) => {
//   inputValueText = e.target.value;
// };

// var inputEleCkBox = document.querySelector("input[type='checkbox']");
// var inputValueCkBox;
// inputEleCkBox.onchange = (e) => {
//   inputValueCkBox = e.target.checked;
//   console.log(e.target.checked);
// };

// var selectEle = document.querySelector("select");
// var selectValue;
// selectEle.onchange = (e) => {
//   selectValue = e.target.value;
//   console.log(selectValue);
// };

//key up/down: Bắt event với bàn phím
// var inputEleText = document.querySelector("input[type='Text']");
// inputEleText.onkeydown = (e) => {
//   console.log(e.which);
//   switch (e.which) {
//     case 27:
//       console.log("Exit");
//       break;
//   }
// };

/**
 * Dom Events <Continue> ===============
 * 1. PreventDefault: Ngăn chặn Hành vi mặc định
 * 2. StopPropagation: Ngăn chặn nổi bọt
 */

// var aTag = document.querySelectorAll("a");
// aTag.forEach((element) => {
//   element.onclick = (e) => {
//     if (!e.target.href.startsWith("https://f8.edu.vn")) {
//       e.preventDefault();
//     }
//   };
// });

// var ulEvent = document.querySelector("ul");
// ulEvent.onmousedown = (e) => {
//   e.preventDefault();
// };
// ulEvent.onclick = (e) => {
//   console.log(e.target);
// };

// 2. stopPropagation: Ngăn chặn nổi bọt
// document.querySelector("div").onclick = (e) => {
//   console.log("DIV");
// };

// document.querySelector("button").onclick = (e) => {
//   e.stopPropagation();
//   console.log("Click ME !");
// };

// EVENTS LISTENER =======================
/**
 * 1. dom event / event listener
 * 2. Json
 * 3. Fetch
 * 4. dom location
 * 5. local storage
 * 6. sesion storage
 * 7. coding convention
 * 8. best practices
 * 9. performance
 * 10. mistakes
 */

/**
 * 1. Xử lý nhiều việc khi 1 event xảy ra
 * 2. lắng nghe / hủy bot lắng nghe
 */

// var btn = document.getElementById("btn");
// hủy bot lắng nghe sự kiện bằng cách ghi đè sự kiện bằng 1 func rỗng
// setTimeout(() => {
//   btn.onclick = (e) => {
//     console.log("viec 1");
//     console.log("viec 2");
//     console.log("viec 3");
//   };
// }, 3000);

// function viec1() {
//   console.log("viec 1");
// }
// btn.addEventListener("click", viec1);

// setTimeout(() => {
//   btn.removeEventListener("click", viec1);
// }, 3000);
