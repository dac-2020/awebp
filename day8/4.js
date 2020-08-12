/** Array Fundamental */

// How to declare an Array;
// Case - 1
// 1. Empty Array.
// 2. Size is not required.
// 3. Size is dynamic here.
let arr = [];

// Ideally we should keep the similar data type.
let arr = [1, 2, 3];
let arr = ["A", "B", "C"];
let arr = [1.1, 2.2, 3.3];

// Case - 2
// 1. Homogenous, Data type must be same for all the data. In C, C++, Java
// 2. There is no Data type, Mixing the data type is possible,
let arr = [1, "A", 3.14, true];

// Case - 3
// We can also add Annonymous functino or Arrow Functions in the array.
// More Complex Mixed Data Type.
let arr = [1, "A", 3.14, true, () => {}, 11, function () {}];

// Case - 4
// How to access any element in Array.
// Using Index
// Index start with 0
let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"];
// lets access first element
let firstItem = arr[0]; // Tejas
let anyItem = arr[3]; // Umesh

// Case 5
// How to iterate or how to print all the value of Array.
// arr.length :: Size of the Array
// length is property of Array
let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"];
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  console.log(item); // print or use it logic purpose
}

// Case 6
// Can we update an Array?
// -- can we new value
// -- can we remove value
// -- can we replace value
let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"];
// Add a new value to end of the array
arr.push("Sanam");
// Remove a value from the end of the array
arr.pop();
// Can we update value at certain index
arr[0] = "Tejasss";

// Case - 7
// Can we add an element at particular index
// splice - this can be used to add an elemnt at certain index without replcing
// splice - this can also be used to remove/delete an element from certain index
// splice - it takes three parameter ()
let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"]; // before
arr.splice(2, 0, "sanam");
let arr = ["Tejas", "Sachin", "Sanam", "Omkar", "Umesh", "Yaminee"]; // after

// delete at index 4, second parameter is deleteCount
arr.splice(4, 2);

// More Demo
// lets create an integer array
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  console.log(item); // print or use it logic purpose
}
