/**
 *  JSON: Javascript Object Notation =======
 * - là 1 định dạng dữ liệu ( chuỗi )
 * - không phải là 1 kiểu dữ liệu
 * - hỗ trợ hầu hết mọi ngôn ngữ hiểu được nó
 * - json: thể hiện dạng: number, boolean, null,
 *           array, object, String
 * - thao tác mã hóa / gải mã ( encode / decode )
 * - chuyển đổi từ kiểu dữ liệu sang chuỗi json,
 * từ các chuỗi json sang các kiểu dữ liệu
 * - Stringify: Từ  Javascript type -> JSON
 * - Parse: Từ JSON -> Javascript
 * - JSON thể hiện ở dạng chuỗi cần đặt trong dấu nháy kép
 *
 */

// var jsonNum = "1";
// var jsonArr = '["java", "PHP"]'; // array
// var jsonObj = '{"name":"Tran Van Anh", "age":"20"}';

// console.log(JSON.parse(jsonNum));
// console.log(JSON.parse(jsonArr));

// var object = JSON.parse(jsonObj);
// console.log(object);

// console.log(JSON.stringify(["Javascript", "PHP"]));
// console.log(
//   JSON.stringify({
//     name: "Van Anh",
//     age: 20,
//   })
// );

// Promise (sync, async)====================
/**
 * - Sync: đồng bộ
 * - Async: Bất đồng bộ
 *  setTimeout, setInterval, fetch,
 *  XMLHttpRequest, file reading,
 *  request animation frame
 * -> callback
 */
// vd về đồng bộ và bất đồng bộ (sync/async)
// setTimeout(function() {
//     console.log('Dòng này sẽ in ra sau')
// }, 0)
// // setTimeout là tác vụ bất động bộ (async)
// console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)

// Promise (Pain) ===========================
/**
 * callback hell
 * pyramid of doom
 */
// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//       setTimeout(() => {
//         console.log(4);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise (concept) ============================
// 1. khởi tạo Promise()
// 2. Excutor

/**
 * promise có 3 trạng thái
 * 1. Pendding: chờ
 * 2. fulfilled
 * 3. rejected
 */
// var promise = new Promise((resolve, reject) => {
//   // Excutor
//   // func dc thuc thi khi goi den promise
//   // call den func trc khi doi tuong Promise dc tao ra

//   // logic
//   // thành công: resolve()
//   // Thất bại reject()
//   resolve([
//     {
//       id: 1,
//       name: "Java",
//     },
//     {
//       id: 2,
//       name: "PHP",
//     },
//   ]);
//   reject("Co loi !");
// });

// promise
//   .then(() => {
//     console.log();
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Done");
//   });

// function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// sleep(1000)
//   .then(() => {
//     console.log(1);
//     return sleep(1000);
//   })
//   .then(() => {
//     console.log(2);
//     return new Promise((resolve, reject) => {
//       reject("have bug");
//     });
//   })
//   .then(() => {
//     console.log(3);
//     return sleep(1000);
//   })
//   .then(() => {
//     console.log(4);
//     return sleep(1000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise methods (resolve, reject, all) ================
/**
 * một số thư viện:
 * Quy ước:
 * output luôn luôn là promise
 */
// var promise = new Promise((resolve, reject) => {
//   // resolve("Success !");
//   reject("error !");
// });

// tạo nhanh

// var promise = Promise.resolve("Success !");
// var promise = Promise.reject("Error !");
// promise
//   .then((result) => {
//     console.log("result: ", result);
//   })
//   .catch((err) => {
//     console.log("err: ", err);
//   });

// Promise.all
/**
 * khi 1 trong những promise là reject() -> dừng ngay ctrinh
 */
// var promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([1, 2, 3]);
//   }, 2000);
// });

// var promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([4, 5, 6]);
//   }, 5000);
// });

// Promise.all([promise1, promise2]).then((result) => {
//   console.log(result);
//   var result1 = result[0];
//   var result2 = result[1];
//   console.log(result1.concat(result2));
// });

// Promise example =====================
// var users = [
//   {
//     id: 1,
//     name: "Van Anh",
//   },
//   {
//     id: 2,
//     name: "Tran Anh",
//   },
//   {
//     id: 3,
//     name: "Minh Huyen",
//   },
//   // ....
// ];

// var comments = [
//   {
//     id: 1,
//     user_id: 1,
//     content: "Van Anh Hoc Lap Trinh",
//   },
//   {
//     id: 2,
//     user_id: 2,
//     content: "Tran Anh dang code",
//   },
//   {
//     id: 3,
//     user_id: 1,
//     content: "Cham the nho",
//   },
//   {
//     id: 4,
//     user_id: 2,
//     content: "Qua khen",
//   },
// ];

// /**
//  * 1. lấy ra comment
//  * 2. từu comment lấy ra use_id
//  * 3. từ use_id lấy ra user tương ứng
//  */
// // fake API
// function getComments() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(comments);
//     }, 1000);
//   });
// }

// function getUsersByID(userIds) {
//   return new Promise((resolve, reject) => {
//     var result = users.filter((user) => {
//       return userIds.includes(user.id);
//     });
//     setTimeout(() => {
//       resolve(result);
//     }, 1000);
//   });
// }
// getComments()
//   .then((comments) => {
//     var userIds = comments.map((comment) => {
//       return comment.user_id;
//     });
//     return getUsersByID(userIds).then((users) => {
//       return {
//         users: users,
//         comments: comments,
//       };
//     });
//   })
//   .then((data) => {
//     var commentBlock = document.getElementById("commentsBlock");
//     var html = "";
//     data.comments.forEach((comment) => {
//       var user = data.users.find((user) => {
//         return user.id === comment.user_id;
//       });
//       html += `<li>${user.name}: ${comment.content}</li>`;
//     });

//     commentBlock.innerHTML = html;
//   });

// Fetch ==================================

/**
 * API (URL): Application programing interface
 * cổng giao tiếp giữa các phần mềm
 *
 * backend -> API -> Fetch -> JSON/XML
 * -> JSON.parse -> javascript types
 * -> Render ra giao diện với HTML
 */

// var postAPI = "https://jsonplaceholder.typicode.com/posts";

// // Stream
// fetch(postAPI)
//   .then((response) => {
//     return response.json();
//     // JSON.parse -> Javascript types
//   })
//   .then((post) => {
//     console.log(post);
//   })
//   .catch((err) => {
//     console.log("Have a bug");
//   });

// JSON Server: API server =====================
// https://github.com/typicode/json-server
/**
 * cài nodejs
 * tạo folder add workspace
 * new terminal -> con thư mục json server
 * gõ npm -v -> npm init -> enter -> chọn yes -> npm install
 *
 */
