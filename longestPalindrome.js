function longestPalindrome(s) {
  let maxLength = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindromes
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }

      left--;
      right++;
    }

    // Check for even-length palindromes
    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }

      left--;
      right++;
    }
  }

  return s.substring(start, start + maxLength);
}

console.log(longestPalindrome("cbbd")); // "bb"
