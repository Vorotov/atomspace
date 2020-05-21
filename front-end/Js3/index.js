const x = window.open("https://www.google.com/");
function delay() {
  x.close();
}
setTimeout(delay, 1000);
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function print(x) {
  console.log(x.value);
  if (x.next !== null) print(x.next);
}
print(list);
function a(x, y) {
  return x + y;
}
function b(x, y) {
  return x * y;
}
function c(x, y) {
  return x - y;
}
function D(fn, x1, x2) {
  return fn(x1, x2);
}
let x1 = 2,
  x2 = 4;
console.log("x = " + x1 + " y = " + x2);
console.log("x - y: " + D(c, x1, x2));
console.log("x + y: " + D(a, x1, x2));
console.log("x * y: " + D(b, x1, x2));

let arr = [1, 2, 3, 4, 5, { hello: "world" }];
console.log(arr);
arr.pop();
console.log("Удалить объект из массива: " + arr);
console.log(arr.join(" и "));
arr[arr.indexOf(4)] = 10;
arr.reverse();
console.log(arr);

const timeouts = document.createElement("h1");
console.log(timeouts);
let t = 0,
  i = 0;
const intervals = document.createElement("h1");
timeouts.textContent = "Timeout: 0";
intervals.textContent = "Interval: 0";
document.body.append(timeouts);
document.body.append(intervals);
let timerId = setTimeout(0);
let intervalId = setInterval(0);
function start() {
  timerId = setTimeout(() => {
    t++;
    timeouts.textContent = "Timeout: " + t;
  }, 5000);
  intervalId = setInterval(() => {
    i++;
    intervals.textContent = "Interval: " + i;
  }, 1000);
}
function reset() {
  clearTimeout(timerId);
  i = 0;
  clearInterval(intervalId);
  intervals.textContent = "Interval: 0";
}
