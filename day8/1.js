function hello(fn) {
  fn();
}

// Use Case  - 1
// YES,  trying to call the function without any argument
// Error, because the function accepts paramer as a function
hello();

// Use Case - 2
// YES, with Number as a parameter
// Error, because the function accepts paramer as a function
hello(1);

// Use Case - 3
// YES, with String as a parameter
// Error, because the function accepts paramer as a function
hello("cdac");

// Use Case - 4
hello(function () {});
hello(() => {});

let anfn = function () {};
hello(anfn);

let arfn = () => {};
hello(arfn);
