//closure
function makeCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// codebuddy question 1
function findDistinct(...args) {
  let map = new Map();
  args.flat().forEach((ele) => {
    map.set(ele, (map.get(ele) || 0) + 1);
  });
  return [...map.keys()].filter((i) => map.get(i) === 1);
}

console.log(findDistinct([1, 2, 3], [2, 3, 4], [3, 4, 5]));
// Output: [1,5]
