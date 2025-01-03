// Function to check if the substring contains all
// characters of the pattern
function containsAllCharacters(s, p) {
  let count = new Array(256).fill(0);

  // Count the frequency of each character in the pattern
  for (let ch of p) {
    count[ch.charCodeAt(0)]++;
  }

  // For each character in the substring, decrement its count
  for (let ch of s) {
    if (count[ch.charCodeAt(0)] > 0) {
      count[ch.charCodeAt(0)]--;
    }
  }

  // If all counts in the count array are zero,
  // the substring contains all characters of the pattern
  return count.every((c) => c === 0);
}

// Function to find the smallest substring containing all
// characters of the pattern
function findSmallestSubstring(s, p) {
  let m = s.length;
  let n = p.length;
  let smallestSubstring = "";
  let minLen = Number.MAX_SAFE_INTEGER;

  // Generate all substrings of the given string
  for (let i = 0; i < m; i++) {
    for (let j = i; j < m; j++) {
      let substr = s.slice(i, j + 1);

      // Check if the substring contains all
      // characters of the pattern
      if (containsAllCharacters(substr, p)) {
        let currLen = substr.length;

        // Update the smallestSubstring if the
        // current substring is smaller
        if (currLen < minLen) {
          minLen = currLen;
          smallestSubstring = substr;
        }
      }
    }
  }

  return smallestSubstring;
}

let s = "timetopractice";
let p = "toc";

let result = findSmallestSubstring(s, p);

if (result) {
  console.log(result);
} else {
  console.log(-1);
}
