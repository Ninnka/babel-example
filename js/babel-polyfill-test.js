require("babel-polyfill");
let getFun = function () {
  let paramsArr = Array.from(arguments);
  console.log(paramsArr);
};
let p = [1, 2, 3];
getFun(p);
