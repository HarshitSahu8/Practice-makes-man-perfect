// This is a JavaScript coding problem from BFE.dev

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  const _ = curry.placeholder;

  function curried(...args) {
    // Replace placeholders with new arguments and track how many args we need
    const filledArgs = args.slice(0, fn.length); // Limit the args to the function's length
    const completeArgs =
      filledArgs.length >= fn.length && filledArgs.every((arg) => arg !== _);

    if (completeArgs) {
      return fn(...filledArgs);
    }

    // Return new function to handle further argument collection
    return (...newArgs) => {
      const mergedArgs = filledArgs
        .map((arg) => (arg === _ && newArgs.length ? newArgs.shift() : arg))
        .concat(newArgs);
      return curried(...mergedArgs);
    };
  }

  return curried;
}

curry.placeholder = Symbol();

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
const _ = curry.placeholder;
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(_, 2)(1, 3)); // '1_2_3'
console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_2_3'
