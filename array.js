// =========== Lam viec voi mang =============

// var Courses = [
//     {
//         name: "Java",
//         price: 300
//     },
//     {
//         name: "Js",
//         price: 100
//     },
//     {
//         name: "C++",
//         price: 40
//     },
//     {
//         name: "C#",
//         price: 200
//     }
// ];

// console.log("forEach(): ");
// // forEach() : duyet qua all cac ptu cua mang
// Courses.forEach(function(course, index) {
//     console.log(index, course);
// });

//====================
// console.log("every(): ");
// // every() : ktra xem tat ca cac ptu thuoc 1 mang phai thoa man 1 dieu kien j do
// var isFree = Courses.every(function(course, index) {
//     return course.price === 0;
// });
// console.log(isFree);

//===================
// console.log("some(): ");
// // some() : chi can 1 ptu la dung thi tra ve true va dung lai ngay
// var isFree1 = Courses.some(function(course, index) {
//     console.log(index);
//     return course.price === 0;
// });
// console.log(isFree1);

//==================
// console.log("find(): ");
// // find() : duyet va tim cac ptu tm va tra ve ptu do va chi tra ve 1 ptu
// var isCourse = Courses.find(function(course, index) {
//     console.log(index);
//     return course.name === "Js";
// });
// console.log(isCourse);

//=======================
// console.log("filter(): ");
// // // find() : duyet va tim cac ptu tm DK va tra ve tat ca cac ptu do
// var list = Courses.filter(function(course, index) {
//     return course.name === "Js";
// });
// console.log(list);

//======================
// console.log("map(): ");
// // map() : duyet qua tung phtu cua mang, moi khi duyet qua ptu nao thif call lai ham (doi so)
// var newCourse = Courses.map(function (course, index, originArray) {
//     // console.log(course)
//     // return ve cai j thi nos tra ve 1 mang cac gia tri do
//     // return {
//     //     name: `Khoa hoc: ${course.name}`,
//     //     pricae: `Gia: ${course.price}`,
//     //     originArray: originArray
//     // };
//     // return course.name; // tra ve mang cac name
//     // return course.price; // tra ve 1 mang cac price
// })
// console.log(newCourse);

//=======================
// console.log("reduce(): ");
// // dung ham for
// var totalCoin = 0;
// for ( var key of Courses) {
//     totalCoin += key.price;
// }
// console.log(totalCoin);
// var i = 0;

// reduce(/ham tham so truyen vao/, /Gia tri khoi tao ban dau/)
// var totalCoin = Courses.reduce(function(accumulator, currentValue, currentIndex, originArray) {
//     // i++;
//     var result = accumulator + currentValue.price;
//     // console.table({
//     //     "lan chay thu": i,
//     //     "Bien luu tru": accumulator, // accumulator luon luon bang voi gia tri cua result lan truoc do
//     //     "price": currentValue.price,
//     //     "Ket qua tich tru": result
//     // });
//     return result;
// }, 0);

// console.log(totalCoin);

// var totalPrice = Courses.reduce(function(total, course) {

//     return total + course.price;
// }, 0); // intial value

// console.log(totalPrice);

//===========================
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var flatArray = depthArray.reduce(function (flatOut, depthItem) {
//     return flatOut.concat(depthItem);
// }, []);
// console.log(flatArray);

//=========================
// var topics = [
//     {
//         topic: "front-end",
//         courses: [
//             {
//             id: 1,
//             title: "html, css"
//             },
//             {
//                 id: 2,
//                 title: "Javascript"
//             }]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "PhP"
//             },
//             {
//                 id: 2,
//                 title: "Java"
//             }
//         ]
//     }
// ]
// var newCourse = topics.reduce( function (course, topic) {
//     return course.concat(topic.courses);
// }, []);
// // console.log(newCourse);
// var htmls = newCourse.map( function (course) {
//     return `
//         <div>
//             <h2>${course.title}</h2>
//             <p>ID: ${course.title}</p>
//         </div>
//     `;
// })
// console.log(htmls.join());

//=========================
// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
//   ];

//   function calculateRating(li) {
//     var isNolan = watchList.filter( function (tg, index) {
//         return tg.Director === "Christopher Nolan";
//     });

//     var IMDB = isNolan.reduce( function (score, film) {
//         return score + parseFloat(film.imdbRating);
//     }, 0)
//     return IMDB/isNolan.length;
//   }
//   // Expected results
//   console.log(calculateRating(watchList)); // Output: 8.675

// ===========================
// reduce( <Ham callBack>, <Gtri khoi tao>);

// // ===== t??? ?????nh ngh??a ph????ng th???c reduce
// Array.prototype.reduce2 = function(callBack, /*intialValue*/ result) {
//   let i = 0;
//   // n???u nh?? kh??ng truy???n initialValue
//   /**
//    * arguments.length < 2
//    * ki???m tra xem ng?????i ta c?? truy???n v??o ?????i s??? th??? 2
//    * v??o function hay kh??ng
//    * n???u c?? th?? arguments.length = 2
//    * n???u kh??ng th?? arguments.length < 2
//    */
//   if ( arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }
//   //
//   for (; i < this.length; i++) {
//     result = callBack(result, this[i], i, this);
//   }
//   return result;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // var result = numbers.reduce( function (index, number) {
// //   return index + number;
// // }, 0);
// // Ho???c
// var result = numbers.reduce2( (total, number, index, Array) => {

//   console.log(total, number, index, Array);
//   return total + number;
// }, 0);
// console.log("result = " + result);

// //============== BT
// //Expected results:
// var arr = [
//   ['name', 'S??n ?????ng'],
//   ['age', 18],
// ];
// function arrToObj(Arrays) {
//   var newarr = Arrays.reduce( function (title, arr) {
//       return title.concat(arr);
//   }, []);
//   var newObj = {};
//   for ( let i = 0; i <= Arrays.length; i += 2) {
//     newObj[ newarr[i]] = newarr[i+1];
//   }
//   return newObj;
// }
// console.log(arrToObj(arr)); // { name: 'S??n ?????ng', age: 18 }

// // ============
// var Arr = [1, 2, 3, [4, 14], 75, [3, 65, 453]];

// var newArr = Arr.reduce( (title, item) => {
//   return title.concat(item);
// }, []);
// console.log(newArr);

// // =========== includes method =======
// // ki???m tra xem 1 chu???i c?? t???n t???i ??? trong 1 m???ng/String hay kh??ng
// // var title = "hsdjvdshhs";
// // console.log(title.includes("vds")); // output: true
// var courses = [
//   "java",
//   "PHP",
//   "Html, css"
// ]
// console.log(courses.includes("java")); // output: true
// // console.log(courses.includes("java", 1)); // output: true

// ============================ CALLBACK =================
/**
 * l?? h??m
 * truy???n qua ?????i s???
 */
// function myFuntion(param) {
//     if ( typeof param === "function") {
//         param(123);
//     }
// }
// function myCallBack(value) {
//     console.log(value);
// }
// myFuntion(myCallBack);

// // =================
// Array.prototype.map1 = function (callBack) {
//   var output = [],
//     arrayLength = this.length;
//   for (var i = 0; i < arrayLength; i++) {
//     var result = callBack(this[i], i);
//     output.push(result);
//   }
//   return output;
// };
// var courses = ["java", "PHP", "Ruby"];
// var htmls = courses.map1(function (course, index) {
//   return `<h2>${course}</h2>`;
// });
// // var htmls = courses.map( (course) => {
// //     return `<h2>${course}</h2>`;
// // });
// console.log(htmls.join(""));

//====================
// Array.prototype.myMap = function (element) {
//   var output = [],
//     arrayLength = this.length;
//   for (var i = 0; i < arrayLength; i++) {
//     var result = element(this[i], i);
//     output.push(result);
//   }
//   return output;
// };
// // // Expected results
// const numbers = [1, 2, 3];
// console.log(
//   numbers.myMap(function (number) {
//     return number * 2;
//   })
// ); // Output: [2, 4, 6]
// console.log(
//   numbers.myMap(function (number, index) {
//     return number * index;
//   })
// ); // Output: [0, 2, 6]

//map() : duyet qua tung phtu cua mang, moi khi duyet qua ptu nao thi callback ham (doi so)
// Array.prototype.map3 = function (Callback) {
//   var output = [],
//     arrLenght = this.length;
//   for (var i = 0; i < arrLenght; i++) {
//     var result = Callback(this[i], i);
//     output.push(result);
//   }
//   return output;
// };
// var numbers = [1, 2, 3, 4];
// console.log(
//   numbers.map3(function (number, index) {
//     return number * 10;
//   })
// );

// ============== T??? X???y D???ng Ph????ng Th???c Foreach ====
// Object prototype
// for in
// hasOwnProperty

// Array.prototype.forEach2 = function (callBack) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       callBack(this[index], index, this);
//     }
//   }
// };
// var courses = ["java", "c++", "ruby"];

// courses.forEach2(function (course, index, courses) {
//   console.log(index, course, courses);
// });

// ============= T??? SD Ph????ng Th???c filter ===========
// tr??? v??? element trong 1 array m?? th???a m??n 1 ??i???u ki???n n??o ????
// kh??ng l???p qua 1 array tr???ng
// var course = [
//   {
//     name: "java",
//     cost: 100,
//   },
//   {
//     name: "C++",
//     cost: 0,
//   },
//   {
//     name: "PHP",
//     cost: 200,
//   },
// ];

// Array.prototype.filter2 = function (callback) {
//   var output = [];
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result = callback(this[index], index, this);
//       if (result) {
//         output.push(this[index]);
//       }
//     }
//   }

//   return output;
// };

// var filterCourse = course.filter2((course, index, array) => {
//   return course.cost <= 100;
// });

// console.log(filterCourse);

//// ============
// Array.prototype.myFilter = function (cb) {
//   var output = [];
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result = cb(this[index], index, this);
//       if (result) {
//         output.push(this[index]);
//       }
//     }
//   }

//   return output;
// };

// //Expected results:

// const numbers = [1, 2, 3, 4];

// console.log(
//   numbers.myFilter(function (number) {
//     return number % 2 === 0;
//   })
// );
// //Output: [2, 4];

// console.log(
//   numbers.myFilter(function (number, index) {
//     return index % 2 === 0;
//   })
// );
// //Output: [1, 3];

// console.log(
//   numbers.myFilter(function (number, index, array) {
//     return array.length % 2 === 0;
//   })
// );
// //Output: [1, 2, 3, 4];

// ============== T??? XD Ph????ng th???c Some() ========
// tr??? v??? t???i thi???u 1 element c?? th???a m??n ??i???u ki???n n??o ???? kh??ng
// tr??? v??? true / false
// kh??ng l???p qua 1 array r???ng => tr??? v??? tr??e
// var course = [
//   {
//     name: "java",
//     cost: 100,
//     isFinish: false,
//   },
//   {
//     name: "C++",
//     cost: 0,
//     isFinish: true,
//   },
//   {
//     name: "PHP",
//     cost: 200,
//     isFinish: false,
//   },
// ];

// Array.prototype.mySome = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (callback(this[index], index, this)) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

// var result = course.mySome((course, index) => {
//   return course.isFinish;
// });

// console.log(result);

// ============================
// Array.prototype.mySome = function (cb) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (cb(this[index], index, this)) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

// const numbers = [1, 3, 3, 5];

// console.log(
//   numbers.mySome(function (number) {
//     return number % 2 === 0;
//   })
// ); //Output: false

// console.log(
//   numbers.mySome(function (number, index) {
//     return index % 2 === 0;
//   })
// ); // Output: true

// console.log(
//   numbers.mySome(function (number, index, array) {
//     return array.length % 2 === 0;
//   })
// ); //Output: true

// ============== T??? T???o Ph????ng Th???c Every() =======
// tra ve true / false
// ktra all element, khi all element thoa man dieu kien nao do => tra ve true
// n???u ch??? 1 element khogn tho??? m??n ??i???u ki???n => tr??? v??? false
// var course = [
//   {
//     name: "java",
//     cost: 100,
//     isFinish: false,
//   },
//   {
//     name: "C++",
//     cost: 0,
//     isFinish: true,
//   },
//   {
//     name: "PHP",
//     cost: 200,
//     isFinish: false,
//   },
// ];

// Array.prototype.myEvery = function (callback) {
//   var output = true;
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (!callback(this[index], index, this)) {
//         output = false;
//         break;
//       }
//     }
//   }
//   return output;
// };

// var result = course.myEvery((course, index, array) => {
//   return course.isFinish;
// });

// console.log(result);

// =========================
// Array.prototype.myEvery = function (cb) {
//   var output = true;
//   for (var index in this) {
//     if (this.hasOwnProperty(this)) {
//       if (!cb(this[index], index, this)) {
//         output = false;
//         break;
//       }
//     }
//   }
//   return output;
// };
// const numbers = [1, 3, 3, 5];

// console.log(
//   numbers.myEvery(function (number) {
//     return number % 2 !== 0;
//   })
// ); // Output: true

// console.log(
//   numbers.myEvery(function (number, index) {
//     return index % 2 === 0;
//   })
// ); // Output: false

// console.log(
//   numbers.myEvery(function (number, index, array) {
//     return array.length % 2 === 0;
//   })
// ); // Output: true
