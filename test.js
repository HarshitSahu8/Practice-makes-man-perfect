// const a = [1, 2, 3];
// const b = a.filter((e) => e * 2);
// console.log(b);

function findDistinct(...agrs) {
  let map = new Map();

  agrs.flat().forEach((ele) => {
    map.set(ele, (map.get(ele) || 0) + 1);
  });

  return [...map.keys()].filter((e) => map.get(e) === 1);
}

console.log(findDistinct([1, 2, 3], [2, 3, 4], [3, 4, 5], [5, 6, 7, 8]));
