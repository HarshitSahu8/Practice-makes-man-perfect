// new Promise((resolve, reject) => {
//  resolve(1)
//  resolve(2)
//  reject('error')
// }).then((value) => {
//  console.log(value)
// }, (error) => {
//  console.log('error')
// })

// console.log(['0'].map(parseInt))
// console.log(['0','1'].map(parseInt))
// console.log(['0','1','1'].map(parseInt))
// console.log(['0','1','1','1'].map(parseInt))

// console.log(1);

// setTimeout(function () {
//   console.log(2);
// }, 0);

// Promise.resolve()
//   .then(function () {
//     console.log(3);
//   })
//   .then(function () {
//     console.log(4);
//   });

// console.log(5);

/* input */
let myObj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

/* output */
// {
//   A: "12",
//   B: 23,
//   C.O.L: 56,
//   C.P: 23,
//   C.Q.0: 1,
//   C.Q.1: 2
// }

function concatKeys(obj, parent = "") {
  let result = {};

  Object.keys(obj).forEach((key) => {
    let newKey = parent ? parent + "." + key : key;

    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      // Recursively flatten objects
      Object.assign(result, concatKeys(obj[key], newKey));
    } else if (Array.isArray(obj[key])) {
      // Handle arrays, include index in the key
      obj[key].forEach((item, index) => {
        result[newKey + "." + index] = item;
      });
    } else {
      // Handle primitive values
      result[newKey] = obj[key];
    }
  });

  return result;
}

console.log(concatKeys(myObj));

// import * as React from 'react'
// import { useState, useEffect } from 'react'
// import { createRoot } from 'react-dom/client'

// function A({ children }) {
//  console.log('A')
//  return children
// }

// function B() {
//  console.log('B')
//  return <C/>
// }

// function C() {
//  console.log('C')
//  return null
// }

// function D() {
//  console.log('D')
//  return null
// }
// function App() {
//  const [state, setState] = useState(0)
// //  useEffect(() => {
// //   setState(state => state + 1)
// //  }, [])
//  console.log('App')
//  return (
//   <div>
//      <A><B/></A>
//      <D/>jfgjfgk
//   </div>
//  )
// }

// const root = createRoot(document.getElementById('root'));
// root.render(<App/>)
