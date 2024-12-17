// currying function example
function add(a, b) {
  return a + b;
}

function curryFunction(fn) {
  return function curriedFunction(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...args2) {
      return curriedFunction(...args, ...args2);
    };
  };
}

const curriedAdd = curryFunction(add);

console.log(curriedAdd(1, 2));
console.log(curriedAdd(1)(2));
