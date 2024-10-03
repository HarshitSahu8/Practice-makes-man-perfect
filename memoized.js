var map = new Map();
function memoizeOne(fn){
    return function (...args){
        key = args.join('_');
        if (map.has(key)) {
            return map.get(key)
        }else{
            result = fn(...args);
            map.set(key, result);
            return result;
        }
    }

}

function add(a, b){
    var res = a + b;
    return res;
}

function factor(n){
    if(n < 1) return 1;
    return n*factor(n-1);
}
var memSum = memoizeOne(add);

// Example usage:
// console.log(memSum(2, 3)); // 5, calculated
// console.log(memSum(2, 3)); // 5, cached result
// console.log(memSum(3, 4)); // 7, calculated
// console.log(memSum(2, 3)); // 5, cached result again


// // Timing the non-memoized function
// console.time("Non-Memoized");
// for (let i = 0; i < 1e6; i++) {
//     add(2, 3); // Repeated calls
// }
// console.timeEnd("Non-Memoized");

// // Timing the memoized function
// console.time("Memoized");
// for (let i = 0; i < 1e6; i++) {
//     memSum(2, 3); // Repeated calls
// }
// console.timeEnd("Memoized");

// memoized factor
var memoizedFactor = memoizeOne(factor);
// Timing the non-memoized function
console.time("Non-Memoized");
for (let i = 0; i < 1e6; i++) {
    factor(5); // Repeated calls
}
console.timeEnd("Non-Memoized");

// Timing the memoized function
console.time("Memoized");
for (let i = 0; i < 1e6; i++) {
    memoizedFactor(5); // Repeated calls
}
console.timeEnd("Memoized");

