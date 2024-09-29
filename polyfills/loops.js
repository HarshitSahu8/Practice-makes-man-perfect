// map polyfill
if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    var T, A, k;
    if (this == null) {
      throw new TypeError("this is null or not defined");
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    if (arguments.length > 1) {
      T = thisArg;
    }
    A = new Array(len);
    k = 0;
    while (k < len) {
      var kValue, P;
      if (k in O) {
        kValue = O[k];
        P = callback.call(T, kValue, k, O);
        A[k] = P;
      }
      k++;
    }
    return A;
  };
}

// flat polyfill
Array.prototype.flat = function (depth = 1) {
  let output = [];
  // Helper function to flatten array
  function flatten(array, depth) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && depth > 0) {
        flatten(array[i], depth - 1); // Recurse with reduced depth
      } else {
        output.push(array[i]); // Push non-array elements directly
      }
    }
  }

  // Start the flattening process with the current array (`this`)
  flatten(this, depth);

  return output;
};

const arr = [1, [2], [3, [4]]];
console.log(arr.flat()); // [1, 2, 3, [4]]
console.log(arr.flat(1)); // [1, 2, 3, [4]]
console.log(arr.flat(2)); // [1, 2, 3, 4]
