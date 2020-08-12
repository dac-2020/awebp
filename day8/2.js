/** Study setInterval */

// Case - 1 :: calling setInterval
setInterval(function () {
  // logic here
  console.log("I am interval, using annonymous!!");
}, 1000);

// Case - 2
setInterval(() => {
  // logic here
  console.log("I am also interval, using Arrow");
}, 1000);

// Case - 3;
let anfn = function () {
  // logic here
  console.log("I am getting uses as parameter inside the setinveral");
};
setInterval(anfn, 1000);
