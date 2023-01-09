//1 let & const ==========

// var >< Let, const: scope, hosting
// const >< var, let: assignment

// classes ==========

// class courses {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   getName() {
//     return this.name;
//   }

//   getPrice() {
//     return this.price;
//   }
// }

// const PHPCourse = new courses("PHP", 1000000);
// const JavaCourse = new courses("Java core", 1500000);

// console.log(PHPCourse);
// console.log(JavaCourse);

//Default parameter values =========

// destructuring, rest ==========
// var array = ["java", "C#", "C++"];

// var [a, b, c] = array;
// var [d, ...rest] = array;
// var [e, f, ...rest1] = array;

// console.log(a, b, c);
// console.log(d, rest);

// //
// function logger(...params) {
//   console.log(params);
// }

// logger(1, 2, 3, 4, 5, 6);

// //
// function logger1({ name, price, ...rest }) {
//   console.log(name);
//   console.log(price);
//   console.log(rest);
// }

// logger1({
//   name: "java",
//   price: 1000,
//   description: "Description",
// });

// //

// function logger2([a, b, ...restA]) {
//   console.log(a);
//   console.log(b);
//   console.log(restA);
// }

// logger2([1, 2, 3, 4, 5]);

//Spread ===============
// bỏ đi cặp ngoặc của mảng và object

// var array1 = [1, 2, 3, 4];
// var array2 = ["java", "C#", "C++"];
// var array3 = [...array2, ...array1];
// console.log(array3);

// //
// var obj1 = {
//   name: "java",
// };
// var obj2 = {
//   price: 100,
// };
// var obj3 = {
//   ...obj1,
//   ...obj2,
// };
// console.log(obj3);

// tagged template string literals ===============

// function highLight([first, ...strings], ...values) {
//   console.log("first: ", first);
//   return values
//     .reduce(
//       (acc, curr) => [acc, `<span>${curr}</span>`, strings.shift()],
//       [first]
//     )
//     .join("");
// }

// var brand = "TVA";
// var course = "java";
// var htmls = highLight`hoc lap trinh ${course} tai ${brand}`;

// console.log(htmls);

// modules =======================
/**
 * import
 * export
 */

// Optional chaining (?.) =================

const obj = {
  name: "alise",
  cat: {
    name: "Dinah",
    cat2: {
      name: "Dinah2",
    },
  },
};

if (obj?.cat?.cat2) {
  console.log(obj.cat.cat2.name);
}
